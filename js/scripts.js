document.addEventListener('DOMContentLoaded', function() {
    const fileButton = document.getElementById('head_menu_buttons_file');
    const editButton = document.getElementById('head_menu_buttons_edit');
    const fileDropdown = document.getElementById('head_menu_dropdowns_file');
    const editDropdown = document.getElementById('head_menu_dropdowns_edit');
    const settingsButton = document.getElementById('head_settings');
    
    let activeMenu = null;
    
    function positionDropdowns() {
        if (fileButton && fileDropdown) {
            fileDropdown.style.left = fileButton.offsetLeft + 'px';
            fileDropdown.style.minWidth = Math.max(250, fileButton.offsetWidth) + 'px';
        }
        if (editButton && editDropdown) {
            editDropdown.style.left = editButton.offsetLeft + 'px';
            editDropdown.style.minWidth = Math.max(250, editButton.offsetWidth) + 'px';
        }
    }
    
    function closeAllMenus() {
        if (fileDropdown) fileDropdown.classList.remove('active');
        if (editDropdown) editDropdown.classList.remove('active');
        if (fileButton) fileButton.classList.remove('active');
        if (editButton) editButton.classList.remove('active');
        activeMenu = null;
    }
    
    function openMenu(menuId) {
        closeAllMenus();
        
        if (menuId === 'file' && fileDropdown && fileButton) {
            fileDropdown.classList.add('active');
            fileButton.classList.add('active');
            activeMenu = 'file';
        } else if (menuId === 'edit' && editDropdown && editButton) {
            editDropdown.classList.add('active');
            editButton.classList.add('active');
            activeMenu = 'edit';
        }
    }
    
    if (fileButton) {
        fileButton.addEventListener('click', function(e) {
            e.stopPropagation();
            if (activeMenu === 'file') {
                closeAllMenus();
            } else {
                openMenu('file');
            }
        });
    }
    
    if (editButton) {
        editButton.addEventListener('click', function(e) {
            e.stopPropagation();
            if (activeMenu === 'edit') {
                closeAllMenus();
            } else {
                openMenu('edit');
            }
        });
    }
    
    if (fileButton) {
        fileButton.addEventListener('mouseenter', function() {
            if (activeMenu !== null) {
                openMenu('file');
            }
        });
    }
    
    if (editButton) {
        editButton.addEventListener('mouseenter', function() {
            if (activeMenu !== null) {
                openMenu('edit');
            }
        });
    }
    
    document.addEventListener('click', function() {
        closeAllMenus();
    });
    
    if (fileDropdown) {
        fileDropdown.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
    
    if (editDropdown) {
        editDropdown.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
    
    if (settingsButton) {
        settingsButton.addEventListener('click', function(e) {
            e.stopPropagation();
            closeAllMenus();
        });
    }
    
    window.addEventListener('resize', function() {
        positionDropdowns();
        if (activeMenu) {
            openMenu(activeMenu);
        }
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeAllMenus();
        }
    });
    
    positionDropdowns();
});
