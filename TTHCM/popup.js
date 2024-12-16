// document.getElementById('scanBtn').addEventListener('click', () => {
//     chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//         chrome.scripting.executeScript({
//             target: { tabId: tabs[0].id },
//             function: scanText
//         });
//     });
// });

// function scanText() {
//     // Example: Alert the number of paragraphs on the page
//     const paragraphs = document.querySelectorAll('p');
//     alert(`There are ${paragraphs.length} paragraphs on this page.`);
// }
