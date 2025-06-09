function checkPassword() {
            const correctPassword = "ngvtonnang";
            const input = document.getElementById("vipPass").value;
            const linkDiv = document.getElementById("vipLink");
            const errorDiv = document.getElementById("errorMsg");

            if (input === correctPassword) {
                linkDiv.style.display = "block";
                errorDiv.textContent = "";
            } else {
                linkDiv.style.display = "none";
                errorDiv.textContent = "Mật khẩu sai!";
            }
        }
