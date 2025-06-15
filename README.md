# 🧩 AutoFormFiller – Smart Google Forms Autofill Extension

A customizable Chrome extension that auto-fills common fields in Google Forms — ideal for students repeatedly filling out internship, placement, or university forms.

---

## 🚀 Features

- ✅ **Custom Field Data**  
  Save and edit your personal details (like name, UID, email, etc.)

- 🧠 **Smart Matching with Aliases**  
  Match field labels even if they vary (e.g., “UID”, “Student ID”, “University ID”)

- 🧾 **Supports Various Input Types**  
  - Text fields  
  - Radio buttons  
  - Checkboxes  
  - Dropdowns  
  - Date pickers

- ⚡ **One-Click Autofill**  
  Automatically fills all matching fields in any Google Form

- 🔄 **Data Sync Across Chrome**  
  Uses `chrome.storage.sync` so your data is preserved across devices

---

## 📂 Folder Structure

AutoFormFiller/
├── manifest.json # Chrome extension config
├── popup.html # UI for saving/editing form fields
├── popup.js # Logic for handling user input and saving fields
├── content.js # Script injected into Google Forms to perform autofill
└── style.css # Styling for popup.html



---

## 🛠️ Installation

1. Clone or download this repository
2. Open Google Chrome and go to `chrome://extensions/`
3. Enable **Developer Mode** (top-right)
4. Click **Load unpacked**
5. Select the project folder
6. Pin the extension (optional) and click it on a Google Form

---

## 🧪 Example Use Case

- Student fills multiple placement forms
- Saves details like:
  - Name
  - Student UID (with aliases: “UID”, “University ID”)
  - Contact Number
  - Email IDs
- Extension matches form labels and fills them in a click!

---

## 📌 Planned Features

- 🔄 Profile presets (placement, college, events)
- 📤 Export/Import saved field data
- 👁️ Dry-run/preview mode before auto-fill
- 🧠 Improved AI-based matching (ML/NLP)

---

## 🔐 Permissions & Privacy

- No external API calls
- No data is transmitted outside the browser
- All data is securely stored using `chrome.storage.sync`

---

## 📃 License

MIT License © 2025 Deepansh Rai

---

## 🙌 Contributing

PRs welcome! Please open issues for feature requests or bugs.
