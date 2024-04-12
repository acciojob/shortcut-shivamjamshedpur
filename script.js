function shortcut(s1, s2) {
	
	if not s1 or not s2:
        return ''
    else:
        return s1[0].upper() + s2[0].lower()
}

// Do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
