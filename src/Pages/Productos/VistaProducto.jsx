import { Link } from 'react-router-dom'
import cupcake from "./cupacke.jpg"

export function VistaProducto() {
    return (
        <>
            <div id="main">
                <h1>Producto</h1>
                <Link to="/productos">
                    <button>atrás</button>
                </Link>
                    <div id="vistaProducto">
                        <div class="container">
                        <div class="col1">
                            <img src={cupcake}/>
                        </div>
                        <div class="col2">
                            <h1>cupcake</h1>
                            <p>Stock: 2349807</p>
                            <p>Precio: 2349807</p>
                            <div class="info">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras convallis, enim mattis interdum mattis, justo felis ullamcorper ante, vitae consectetur est massa eget dolor. Mauris pulvinar sit amet nibh eu venenatis. Aliquam accumsan quam tempus dolor tempus volutpat id eget urna. Vestibulum ut mollis odio. Sed varius libero eget diam luctus, a convallis neque mollis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at tincidunt eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum sollicitudin sem eu ante bibendum, et rutrum nisl porttitor. Vivamus eros elit, sodales feugiat elit eget, porta ultrices nulla. In hac habitasse platea dictumst. Sed mattis ante in mauris efficitur, at accumsan ex ullamcorper. Quisque non sagittis nulla, ac lacinia ante. Vivamus sagittis est id vestibulum faucibus. Proin efficitur leo a fringilla tristique. Curabitur nulla ante, ultricies sit amet mattis sed, rhoncus non massa.
                                Morbi vehicula risus a ipsum aliquam ullamcorper. Vivamus felis quam, lobortis ac augue ut, feugiat fringilla lectus. Nunc tristique arcu dolor, id sodales mi semper ac. Fusce pretium, nunc eget posuere finibus, ex ipsum efficitur mauris, interdum faucibus eros lacus in massa. Quisque et odio et turpis lobortis imperdiet sed eu mauris. Donec eget maximus sapien, vitae sollicitudin ipsum. Aliquam suscipit risus ac ultricies tempor. Pellentesque turpis dui, hendrerit id tristique et, luctus quis nisi. Quisque vel hendrerit dolor, ut auctor odio.
                                Ut id sodales tellus, vitae fermentum magna. In hac habitasse platea dictumst. Nulla eget tristique tellus, in suscipit lorem. Nam convallis, magna sed iaculis fermentum, nisi risus mattis odio, non facilisis ligula justo et nulla. Suspendisse rhoncus porttitor maximus. Fusce sollicitudin lorem lacinia urna volutpat, et tempor sapien dignissim. Mauris non efficitur eros. Ut faucibus auctor nibh a suscipit. 
                            </div>
                        </div>
                        </div>
                    </div>
            </div>
        </>
    )
}