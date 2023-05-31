
const Success = (values) => {
    let success = ''
    if (values.user === "user1" && values.password === "1") {
        success = '/home';
    } else {
        alert('Tài khoản hoặc mật khẩu không chính xác');
    }
        
}

export default Success;