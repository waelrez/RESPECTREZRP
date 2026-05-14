const webhookURL = "https://discord.com/api/webhooks/1504471612311867587/lhtweJ9ram3EQUOVA4GUFqxUwCUFNhjabyVyqaLZEXRXpach6dusTwEGoGVk30dJH2QE";

document.querySelector("form").addEventListener("submit", async function(e) {
  e.preventDefault();

  const form = this;

  const data = {
    content: `
📩 تقديم جديد RESPECTREZ RP

👤 الاسم: ${form[0].value}
🎂 العمر: ${form[1].value}
💬 ديسكورد: ${form[2].value}
⏱ ساعات FiveM: ${form[3].value}

📖 الخبرة:
${form[4].value}

❓ PowerGaming:
${form[5].value}

❓ MetaGaming:
${form[6].value}

❓ FearRP:
${form[7].value}

🚨 موقف الخطف:
${form[8].value}

📜 القصة:
${form[9].value}

⭐ السبب:
${form[10].value}
    `
  };

  await fetch(webhookURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  alert("تم إرسال التقديم بنجاح!");
  form.reset();
});
