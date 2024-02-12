export const getInitials = (name: string) => {
    const names = name.split(" ");
    let initials = "";
    if (names.length === 1) {
        initials = names[0].charAt(0).repeat(2);
    } else {
        initials = names[0].charAt(0) + names[1].charAt(0);
    }
    return initials.toUpperCase();
};