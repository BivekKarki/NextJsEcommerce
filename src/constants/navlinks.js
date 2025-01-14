const { HOME_ROUTES, CONTACT_ROUTES, ABOUT_ROUTES, PRODUCT_ROUTES } = require("./routes");

const navLinks = [
    {
        label: "Home",
        route: HOME_ROUTES,
    },
    {
        label: "About",
        route: ABOUT_ROUTES,
    },
    {
        label: "Contact",
        route: CONTACT_ROUTES,
    },
    {
        label: "Products",
        route: PRODUCT_ROUTES,
    },
    {
        label: "Users",
        route: "/users",
    },
]

export default navLinks;