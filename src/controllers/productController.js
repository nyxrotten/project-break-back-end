
const generateHome = () => {
    const home = `
        <h1>Home</h1>
        <nav class="nav">
            <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">T-Shirts</a></li>
            <li><a href="#">Trousers</a></li>
            <li><a href="#">Shoes</a></li>
            <li><a href="#">Accesories</a></li>
            <li><a href="#">Login</a></li>
            </ul>
        </nav>
        <h1>Home</h1>
        <section class="productBox">
            <div class="productBox shoes">
                <h2>Shoes</h2>
                <img>
                <button>See</button>
            </div>
            <div class="productBox shirt">
                <h2>T-shirts</h2>
                <img>
                <button>See</button>
            </div>
            <div class="productBox trou">
                <h2>Shoes</h2>
                <img>
                <button>See</button>
            </div>
            <div class="productBox accesory">
                <h2>Shoes</h2>
                <img>
                <button>See</button>
            </div>
        </section>
        `
    return home;
};
const generateDashboard = () => {
    const dashboard = `<h1>Dashboard</h1>`
    return dashboard; 
};

const newProductForm = () => {
    const productForm = `Product form`;
    return productForm;
};
module.exports = {
    generateDashboard,
    newProductForm,
    generateHome
}