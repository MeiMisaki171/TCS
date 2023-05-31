import Home from "../pages/Home/Home"
import Hethong from "../pages/Hethong/Hethong"
import Danhmuc from "../pages/Danhmuc/Danhmuc"
import Ctthue from "../pages/Ctthue/Ctthue"
import Ctbbn from "../pages/Ctbbn/Ctbbn"
import Haiquan from "../pages/Haiquan/Haiquan"
import Cuoingay from "../pages/Cuoingay/Cuoingay"
import Login from "../Login/Login"

const publicRoutes = [
    { path: '/', component: Login , id: 1},
    { path: '/home', component: Home , id: 2 },
    { path: '/hethong', component: Hethong , id: 3 },
    { path: '/danhmuc', component: Danhmuc , id: 4 },
    { path: '/ctthue', component: Ctthue , id: 5 },
    { path: '/ctbbn', component: Ctbbn , id: 6 },
    { path: '/haiquan', component: Haiquan , id: 7 },
    { path: '/cuoingay', component: Cuoingay , id: 8 }
]
// const privateRoutes = [

// ]

export { publicRoutes }