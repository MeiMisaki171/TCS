import { useState } from "react"
import "./login.scss"
import Validation from "./LoginValidation";
import { useNavigate } from "react-router-dom";

import BANK from "../Bank";

    
function Login() {

    const database = [
        {
            username: "user1",
            password: "1"
        }
    ]
    
    const [values, setValues] = useState({
        user: '',
        password: ''
    })
    const err = Validation(values);
    const [errors, setErrors] = useState({})
    const navigate = useNavigate();
    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    }
    const handleSubmit = (event) => {

        event.preventDefault()
        setErrors(err)
        console.log(values.user)
        const userData = database.find((user) => user.username === values.user[0])
        if (err.user === "" && err.password === "") {
            if (userData) {
                if (userData.password !== values.password[0]) {
                    alert("Mật khẩu không chính xác!")
                } else {
                    navigate('/home')
                }
            } else {
                alert("Người dùng không tồn tại!")
            }
        }
    }

    return (
        <div className='login'>
            <div className='login-header'>
                    <div className="header-top">
                        <div className="ht-left">
                        <a href={BANK.link}>
                            <img src={BANK.logo} alt='logo' className="logo"></img>
                        </a>
                        <span className="slogan">{BANK.slogan}</span>
                        </div>
                        <span className="title">THANH TOÁN THUẾ ĐIỆN TỬ</span>
                    </div>
                    <div className="header-bot">
                        <marquee>Chào mừng bạn đến với Website Hệ thống thu thuế trực tiếp cho {BANK.name}</marquee>
                    </div>
            </div>
            <div className='login-form'>
                    <form action="" onSubmit={handleSubmit}>
                        <span className="welcome">{BANK.acronym} xin chào Bạn,</span>
                        <div className='lf'>
                        <input
                            type="text"
                            className="form-control"
                            placeholder='Tên đăng nhập'
                            autoFocus
                            onChange={handleInput}
                            name="user" />
                        </div>
                        {errors.user && <span className="text-danger">{errors.user}</span>}
                        <div className='lf'>
                        <input
                            className="form-control"
                            type="password"
                            placeholder='Mật khẩu'
                            onChange={handleInput}
                            name="password"/>
                        </div>
                        {errors.password && <span className="text-danger">{errors.password}</span>}
                        <div className="btn-submit">
                            <button type="submit" className=' btn btn-primary btn-success'>Đăng nhập</button>
                            <a href={BANK.link}
                                className='btn'
                            >Thoát
                            </a>
                        </div>
                    </form>
            </div>
            <div className="login-bottom">
                <div className="bottom-left">
                    <span>Copyright Company: Public Financial Solution- FPT Information System</span>
                    <span>Phiên bản 3.0     Năm 2023</span>
                </div>
                <div className="bottom-right">
                    <span>Address: 21nd floor, Keangnam Landmark Tower, E6 Pham Hung Road, Hanoi, Vietnam</span>
                    <span>Tel: +84 24 3562 6000, Fax +84 24 35624850, Email: contact@fis.com.vn</span>
                </div>
            </div>
        </div>
    )
}

export default Login