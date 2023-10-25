<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aditya Nagariya's GitHub Profile</title>
    <style>
        body {
            background-color: #f0f0f0;
            font-family: Arial, sans-serif;
            text-align: center;
        }

        h1 {
            font-size: 36px;
            color: #333;
            margin-top: 50px;
            animation: fadeIn 1s ease-in-out;
        }

        p {
            font-size: 18px;
            color: #666;
            animation: fadeIn 2s ease-in-out;
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateX(-20px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
    </style>
</head>
<body>
    <h1>Hi 👋, I'm Aditya Nagariya</h1>
    <p>Stay Hungry, Stay Foolish</p>
    <p>
        <a href="https://github.com/Aditya-Nagariya" target="_blank">My GitHub Profile</a>
    </p>
    <p>
        🔭 I’m currently working on Making my problem-solving skills better
    </p>
    <p>
        🌱 I’m currently learning Python & DSA
    </p>
    <p>
        👨‍💻 All of my projects are available at <a href="https://github.com/Aditya-Nagariya">Aditya-Nagariya</a>
    </p>
    <p>
        🤔 I’m looking for help with ...Competitive Programming
    </p>
    <p>
        💬 Ask me about Anything
    </p>
    <p>
        📫 How to reach me <a href="mailto:adityanagariyav@gmail.com">adityanagariyav@gmail.com</a>
    </p>
    <p>
        ⚡ Fun fact: "Design is not just what it looks like and feels like. Design is how it works."
    </p>

    <!-- JavaScript Animation -->
    <script>
        // Function to change the background color
        function changeBackgroundColor() {
            const colors = ["#ff5733", "#33ff57", "#5733ff", "#ff33a6", "#33a6ff"];
            const body = document.body;
            const currentColor = body.style.backgroundColor;
            const randomColor = colors[Math.floor(Math.random() * colors.length)];

            // Change the background color
            body.style.backgroundColor = randomColor;

            // Reset the color after 2 seconds
            setTimeout(() => {
                body.style.backgroundColor = currentColor;
            }, 2000);
        }
    </script>

    <!-- Add a button to trigger the background color change -->
    <button onclick="changeBackgroundColor()">Change Background Color</button>
</body>
</html>
