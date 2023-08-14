import { Provider } from "react-redux"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { store } from "./store/store"
import HomeLayout from "./Modules/layouts/page/Home.Layout"
import { DashBoard } from "./Modules/layouts/page/DashBoard"


function App() {


    return (
        <BrowserRouter>
            <Provider store={store}>
                <Routes>
                    {/* <Route path="/" element={<AuthLayout />}>
                    <Route index element={<Login />} />
                    <Route path="registrar" element={<Registrar />} />
                    <Route path="olvide-password" element={<OlvidePassword />} />
                    <Route path="olvide-password/:token" element={<NuevoPassword />} />
                    <Route path="confirmar/:id" element={<ConfirmarCuenta />} />
                </Route> */}

                    <Route path="/admin" element={<HomeLayout />}>
                        <Route index element={<DashBoard />} />
                        {/* <Route path="perfil" element={<EditarPerfil />} />
                    <Route path="cambiar-password" element={<CambiarPassword />} /> */}
                    </Route>
                </Routes>
            </Provider>
        </BrowserRouter>
    )
}

export default App
