  // mobile menu list
  const menuModules = {
    menuList: [{
            name: 'Home',
            href: 'index-3.html',
        },
        {
            name: 'Shop',
            href: 'index-3.html',
        },
        {
            name: 'My Account',
            href: 'index-3.html',
            
        },
        {
            name: 'Other Pages',
            href: 'index-3.html',
            
        },
    ],
    toggleMenu(index) {
        if (this.menuList[index].isOpen) {
            this.menuList[index].isOpen = false
        } else {
            this.menuList.forEach(menu => menu.isOpen = false)
            this.menuList[index].isOpen = true
        }
    }
}

// Alpine Store
document.addEventListener('alpine:init', () => {
    Alpine.store('mobileMenu', {
        isOpen: false,
    })

    Alpine.store('category', {
        isCategory: false,
    })

    Alpine.store('search', {
        isSearch: false,
    })

    Alpine.store('cart', {
        isCart: false,
    })
})

// Price Range slider
function rangeslide(value) {
    document.getElementById('rangeValue').innerHTML = value;
}

// nice selector

let niceSelects = document.querySelectorAll(".nice-select")
for (nice of niceSelects) {
  NiceSelect.bind(nice);
}





