// LouRin AI - MODEL TEST ONLY

import { pipeline } from "https://cdn.jsdelivr.net/npm/@huggingface/transformers@4.0.1";

const status = document.getElementById("aiStatus");

async function testAI() {

    try {

        status.textContent = "1/3 Script works!";

        status.textContent = "2/3 Loading tiny model...";

        const generator = await pipeline(
            "text-generation",
            "Xenova/llama2.c-stories15M"
        );

        status.textContent = "3/3 MODEL LOADED! 🎉";

        console.log(generator);

    } catch (error) {

        status.textContent =
            "ERROR: " + (error.message || error);

        console.error(error);

    }

}

testAI();
