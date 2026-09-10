// LouRin AI v0.3.3
// SmolLM2-360M ONNX TEST
// Manual prompt format — chat template fix

import { pipeline } from
"https://cdn.jsdelivr.net/npm/@huggingface/transformers@4.0.1";

const params = new URLSearchParams(window.location.search);

const currentUser =
    params.get("user") || "kaiserin";

const userName =
    currentUser === "louan"
        ? "Louan"
        : "Kaiserin";

const chatMessages =
    document.getElementById("chatMessages");

const input =
    document.getElementById("textMessage");

const status =
    document.getElementById("aiStatus");

let generator = null;

// LOAD AI
async function loadAI() {
    try {
        status.textContent =
            "1/4 AI script started — v0.3.3";

        status.textContent =
            "2/4 Loading ONNX AI — v0.3.3";

        generator = await pipeline(
            "text-generation",
            "onnx-community/SmolLM2-360M-ONNX"
        );

        status.textContent =
            "3/4 ONNX AI loaded — v0.3.3";

        status.textContent =
            "4/4 NEW MODEL READY >< — v0.3.3";

    } catch (error) {
        console.error(
            "LouRin AI loading error:",
            error
        );

        status.textContent =
            "AI ERROR — " +
            (error.message ||
                "Model could not load.");
    }
}

loadAI();

// ADD MESSAGE
function addMessage(text, type) {
    const bubble =
        document.createElement("div");

    bubble.className =
        type === "user"
            ? "message sent"
            : "message received";

    bubble.textContent = text;

    chatMessages.appendChild(bubble);

    chatMessages.scrollTop =
        chatMessages.scrollHeight;
}

// SEND MESSAGE
window.sendAIMessage = async function () {

    const text =
        input.value.trim();

    if (!text) return;

    if (!generator) {
        addMessage(
            "My tiny brain is still loading 😭",
            "ai"
        );
        return;
    }

    addMessage(text, "user");

    input.value = "";

    status.textContent =
        "Thinking... — v0.3.3";

    const thinking =
        document.createElement("div");

    thinking.className =
        "message received";

    thinking.textContent =
        "thinking...";

    thinking.id =
        "aiThinking";

    chatMessages.appendChild(
        thinking
    );

    chatMessages.scrollTop =
        chatMessages.scrollHeight;

    try {

        // MANUAL CHAT PROMPT
        // This avoids the missing chat_template error.

        const prompt =
            `You are LouRin AI.
You are talking to ${userName}.
Be friendly and conversational.

User: ${text}
LouRin AI:`;

        const result =
            await generator(
                prompt,
                {
                    max_new_tokens: 20,
                    do_sample: true,
                    temperature: 0.7,
                    return_full_text: false
                }
            );

        console.log(
            "AI generation result:",
            result
        );

        let answer = "";

        if (
            result &&
            result[0] &&
            result[0].generated_text
        ) {
            answer =
                result[0].generated_text;
        }

        if (!answer.trim()) {
            throw new Error(
                "The AI returned an empty response."
            );
        }

        const thinkingBubble =
            document.getElementById(
                "aiThinking"
            );

        if (thinkingBubble) {
            thinkingBubble.remove();
        }

        addMessage(
            answer.trim(),
            "ai"
        );

        status.textContent =
            "I'm here >< — v0.3.3";

    } catch (error) {

        console.error(
            "LouRin AI response error:",
            error
        );

        const thinkingBubble =
            document.getElementById(
                "aiThinking"
            );

        if (thinkingBubble) {
            thinkingBubble.remove();
        }

        const realError =
            error && error.message
                ? error.message
                : String(error);

        addMessage(
            "AI ERROR:\n" +
            realError,
            "ai"
        );

        status.textContent =
            "Generation error 😭 — v0.3.3";
    }
};

// ENTER TO SEND
input.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Enter" &&
            !event.shiftKey
        ) {
            event.preventDefault();

            window.sendAIMessage();
        }
    }
);
