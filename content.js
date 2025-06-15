chrome.storage.sync.get('fields', (res) => {
    const fields = res.fields || {};
    const entries = Object.entries(fields);

    // Go through all form field containers
    const formFields = document.querySelectorAll('div[role="listitem"]');

    formFields.forEach(field => {
        const labelElement = field.querySelector('div[role="heading"], label, span');
        if (!labelElement) return;

        const label = labelElement.innerText.trim().toLowerCase();

        for (const [key, { value, type, aliases }] of entries) {
            const allAliases = (aliases || []).map(a => a.toLowerCase());
            if (!allAliases.includes(key)) allAliases.push(key); // always include main key

            if (!allAliases.some(alias => label.includes(alias))) continue;

            switch (type) {
                case "text":
                case "email":
                case "phone":
                case "number":
                    const textInput = field.querySelector('input[type="text"], input[type="email"], input[type="tel"], input[type="number"], textarea');
                    if (textInput) {
                        textInput.focus();
                        textInput.value = value;
                        textInput.dispatchEvent(new Event('input', { bubbles: true }));
                    }
                    break;

                case "date":
                    const dateInput = field.querySelector('input[type="date"], input[type="text"]');
                    if (dateInput) {
                        dateInput.value = value;
                        dateInput.dispatchEvent(new Event('input', { bubbles: true }));
                    }
                    break;

                case "dropdown":
                    const selects = field.querySelectorAll('select');
                    selects.forEach(select => {
                        Array.from(select.options).forEach(opt => {
                            if (opt.innerText.toLowerCase().includes(value.toLowerCase())) {
                                select.value = opt.value;
                                select.dispatchEvent(new Event('change', { bubbles: true }));
                            }
                        });
                    });
                    break;

                case "radio":
                    const radioOptions = field.querySelectorAll('div[role="radio"]');
                    radioOptions.forEach(opt => {
                        const radioLabel = opt.innerText.trim().toLowerCase();
                        if (radioLabel.includes(value.toLowerCase())) {
                            opt.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
                            opt.dispatchEvent(new MouseEvent('mouseup', { bubbles: true }));
                            opt.click();
                        }
                    });
                    break;

                case "checkbox":
                    const checkOptions = field.querySelectorAll('div[role="checkbox"]');
                    checkOptions.forEach(opt => {
                        const checkLabel = opt.innerText.trim().toLowerCase();
                        if (checkLabel.includes(value.toLowerCase())) {
                            opt.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
                            opt.dispatchEvent(new MouseEvent('mouseup', { bubbles: true }));
                            opt.click();
                        }
                    });
                    break;

                case "button":
                    const buttons = field.querySelectorAll('div[role="option"], span');
                    buttons.forEach(btn => {
                        const btnText = btn.innerText.trim().toLowerCase();
                        if (btnText.includes(value.toLowerCase())) {
                            btn.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
                            btn.dispatchEvent(new MouseEvent('mouseup', { bubbles: true }));
                            btn.click();
                        }
                    });
                    break;
            }
            break;
        }
    });
});
