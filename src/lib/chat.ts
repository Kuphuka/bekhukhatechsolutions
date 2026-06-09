export async function sendToChatApi(message: string) {
  const apiUrl = import.meta.env.VITE_CHAT_API_URL;

  if (!apiUrl) {
    return null;
  }

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    if (typeof data.reply === "string") {
      return data.reply;
    }
    if (typeof data.text === "string") {
      return data.text;
    }

    return null;
  } catch {
    return null;
  }
}
