#Retro Terminal

A retro-styled terminal interface built with HTML, CSS, and JavaScript, featuring a command-line experience with various functionalities. Provided by AXIA Enterprises.

Features





Command Execution: Supports commands like /clear, /matrix, /weather, /upload, /ocr, /export, /help, and /theme.



Weather Display: Fetches and displays weather in Fahrenheit for any city.



File Processing: Handles uploads of TXT, CSV, DOCX, images, and PDFs with OCR capabilities.



Themes: Switch between green, amber, and blue color themes.



Matrix Effect: Activates a classic matrix-style rain animation.



Export Logs: Exports the chat log as a TXT file.



Responsive Design: Optimized for both desktop and mobile devices.

Installation





Clone the repository or download the HTML file.



Ensure you have a web server to host the file (e.g., use python -m http.server or a local server like XAMPP).



Place the file in the server directory and access it via a browser.

Prerequisites





A weather API key from OpenWeatherMap (set as WEATHER_API_KEY in your environment variables or server configuration).



Internet connection for external libraries and API calls.



External libraries are loaded via CDNs:





Tesseract.js for OCR



pdf.js for PDF processing



Mammoth for DOCX parsing



Papa Parse for CSV parsing

Usage





Open the HTML file in a browser.



Type commands prefixed with / (e.g., /weather London or /upload).



Use the Tab key to autocomplete commands (e.g., /weather).



Drag and drop files or use /upload to process supported file types.



Switch themes with /theme [green/amber/blue].

Commands





/clear: Clears the terminal screen.



/matrix: Starts the matrix rain effect.



/ocr [lang]: Performs OCR on uploaded images or PDFs (default lang is eng).



/upload: Uploads a file for processing.



/help: Displays this command list.



/weather [city]: Shows the weather for the specified city in Fahrenheit.



/export: Exports the chat log as a TXT file.



/theme [green/amber/blue]: Changes the color theme.

API Endpoint





The /api/chat endpoint handles regular chat messages.



The /api/weather endpoint (requires server-side implementation) fetches weather data.

Development





Modify the CSS in the <style> tag for custom styling.



Update the commands array in the script to add or modify commands.



Implement the server-side /api/weather endpoint with the provided JavaScript code.

License

This project is open-source. Feel free to modify and distribute, but please retain the original credits and acknowledge Axia Enterprises.

Contact

For issues or suggestions, please open an issue on the repository or contact Axia Enterprises.
