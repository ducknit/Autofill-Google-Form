document.getElementById('save').addEventListener('click', () => {
    const key = document.getElementById('key').value.trim().toLowerCase();
    const value = document.getElementById('value').value.trim();
    const type = document.getElementById('type').value;
    const aliasesRaw = document.getElementById('aliases').value.trim();

    if (key && value) {
        const aliases = aliasesRaw ? aliasesRaw.split(',').map(a => a.trim().toLowerCase()) : [];
        aliases.push(key); // include the key itself as alias for matching

        chrome.storage.sync.get('fields', (res) => {
            const fields = res.fields || {};
            fields[key] = { value, type, aliases };
            chrome.storage.sync.set({ fields }, () => {
                alert('Field saved!');
                location.reload();
            });
        });
    }
});


document.getElementById('fill').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            files: ["content.js"]
        });
    });
});

window.onload = () => {
    chrome.storage.sync.get('fields', (res) => {
        const container = document.getElementById('fields');
        const fields = res.fields || {};
        Object.entries(fields).forEach(([key, obj]) => {
            const div = document.createElement('div');
            // div.textContent = `${key} (${type}): ${obj.value} [${(obj.aliases || []).join(', ')}]`;
            container.appendChild(div);
        });
    });
};
