// LouRin AI v0.2.2
// LIGHT GENERATION TEST

import { pipeline } from
"https://cdn.jsdelivr.net/npm/@huggingface/transformers@4.0.1";


// ----------------------------------------
// WHO IS TALKING?
// ----------------------------------------

const params = new URLSearchParams(window.location.search);

const currentUser =
    params.get("user") || "kaiserin";

const userName =
    currentUser === "louan"
        ? "Louan"
        : "Kaiserin";


// ----------------------------------------
// AI ELEMENTS
// ----------------------------------------

const chatMessages =
    document.getElementById("chatMessages");

const input =
    document.getElementById("textMessage");

const status =
    document.getElementById("aiStatus");


// ----------------------------------------
// LOAD MODEL
// ----------------------------------------

let generator = null;

async function loadAI() {

    try {

        status.textContent =
            "1/4 AI script started — v0.2.2";

        status.textContent =
            "2/4 Loading tiny AI — v0.2.2";

        generator = await pipeline(
            "text-generation",
            "Xenova/llama2.c-stories15M"
        );

        status.textContent =
            "3/4 Tiny AI loaded — v0.2.2";

        status.textContent =
            "4/4 TEST v0.2.2 — I'm ready ><";

    } catch (error) {

        console.error(
            "LouRin AI loading error:",
            error
        );

        status.textContent =
            "AI ERROR — " +
            (error.message || "Model could not load.");

    }

}

loadAI();


// ----------------------------------------
// ADD MESSAGE
// ----------------------------------------

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


// ----------------------------------------
// SEND MESSAGE
// ----------------------------------------

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
        "Thinking... — v0.2.2";


    const thinking =
        document.createElement("div");

    thinking.className =
        "message received";

    thinking.textContent =
        "thinking...";

    thinking.id =
        "aiThinking";

    chatMessages.appendChild(thinking);

    chatMessages.scrollTop =
        chatMessages.scrollHeight;


    try {

        // ----------------------------------------
        // VERY SMALL TEST PROMPT
        // ----------------------------------------

        const prompt =
            `You are LouRin AI.
You are talking to ${userName}.
User: ${text}
AI:`;


        // ----------------------------------------
        // VERY SMALL GENERATION
        // ----------------------------------------

        const result =
            await generator(prompt, {

                max_new_tokens: 20,

                do_sample: true,

                temperature: 0.7,

                return_full_text: false

            });


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
            document.getElementById("aiThinking");

        if (thinkingBubble) {

            thinkingBubble.remove();

        }


        addMessage(
            answer.trim(),
            "ai"
        );


        status.textContent =
            "I'm here >< — v0.2.2";


    } catch (error) {

        console.error(
            "LouRin AI response error:",
            error
        );


        const thinkingBubble =
            document.getElementById("aiThinking");

        if (thinkingBubble) {

            thinkingBubble.remove();

        }


        const realError =
            error && error.message
                ? error.message
                : String(error);


        addMessage(
            "AI ERROR:\n" + realError,
            "ai"
        );


        status.textContent =
            "Generation error 😭 — v0.2.2";

    }

};


// ----------------------------------------
// ENTER TO SEND
// ----------------------------------------

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
