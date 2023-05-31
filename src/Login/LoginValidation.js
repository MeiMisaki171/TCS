const Validation = (values) => {
    let error = {}
    if (values.user === "") {
        error.user = "Tên đăng nhập không được để trống"
    } else {
        error.user = ""
    }
    if (values.password === "") {
        error.password = "Nhập mật khẩu"
    } else {
        error.password = ""
    }
    return error;
}

export default Validation;