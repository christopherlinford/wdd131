

        document.addEventListener("DOMContentLoaded", function () {
            const input = document.querySelector('#favchap');
            const button = document.querySelector('#add-button');
            const list = document.querySelector('#list');

            button.addEventListener('click', function () {
                if (input.value.trim() !== '') {
                    const li = document.createElement('li');
                    const deleteButton = document.createElement('button');
                    
                    li.textContent = input.value;
                    deleteButton.textContent = 'X';
                    deleteButton.classList.add('delete');
                    li.appendChild(deleteButton);
                    list.appendChild(li);
                    
                    deleteButton.addEventListener('click', function () {
                        list.removeChild(li);
                    });
                    
                    input.value = '';
                    input.focus();
                }
            });
        });



