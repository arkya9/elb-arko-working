import customFetch from "../../utils/customFetch";
import { toast } from "react-toastify";
import signupImage from "../../assets/website/img/others/1.png";
import { splitErrors } from "../../utils/showErrors";
import { Form, Link, redirect } from "react-router-dom";
//import { useDispatch } from "react-redux";
import { useState } from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
export const action = async ({ request }) => {
  const formData = await request.formData();
  let data = Object.fromEntries(formData);
  data = { ...data, tnc: data.tnc === "on" ? true : false };
  try {
    await customFetch.post(`/auth/register`, data);
    toast.success(`Welcome to Easy Lending Buddy`);
    return redirect("/sign-in");
  } catch (error) {
    splitErrors(error?.response?.data?.msg);
    return error;
  }
};

export default function Signup() {
  document.title = `Join the Family | ${import.meta.env.VITE_APP_TITLE}`;
  //const navigation = useNavigation();
  //const isLoading = navigation.state === "submitting";
  //const dispatch = useDispatch();
  const [textType, setTextType] = useState("password");
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    password: "",
    passwordConfirm: "",
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <section className="py-110 bg-offWhite">
      <div className="container">
        <div className="mb-5">
          <div className="row justify-content-center">
            <div className="col-auto">
              <div className="d-flex align-items-center gap-3">
                <a href="#" className="w-form-btn">
                  Freelancer
                </a>
                <a href="#" className="w-form-btn-outline">
                  Buyer
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-3 p-3">
          <div className="row g-4">
            <div className="col-lg-6 p-3 p-lg-5">
              <div className="mb-40">
                <h2 className="section-title mb-2">Sign up</h2>
                <p className="section-desc">Welcome to Work Zone</p>
              </div>
              <Form method="post" autoComplete="off">
                <div className="form-container">
                  <div className="row gy-3">
                    <div className="form-input col-lg-12">
                      <label htmlFor="fname" className="form-label">
                        First Name
                        <span className="text-lime-300">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter name"
                        name="firstName"
                        id="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-input col-lg-12">
                      <label htmlFor="lname" className="form-label">
                        Last Name <span className="text-lime-300">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter last name"
                        name="lastName"
                        id="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-input col-lg-12">
                      <label htmlFor="phone" className="form-label">
                        Email <span className="text-lime-300">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter email"
                        name="email"
                        id="email"
                        value={form.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-input col-lg-12">
                      <label htmlFor="email" className="form-label">
                        Mobile <span className="text-lime-300">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter mobile no."
                        name="mobile"
                        id="mobile"
                        value={form.mobile}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-input col-lg-12">
                      <label htmlFor="email" className="form-label">
                        Password <span className="text-lime-300">*</span>
                      </label>
                      <input
                        type={textType}
                        className="form-control"
                        placeholder="Password"
                        name="password"
                        id="password"
                        value={form.password}
                        onChange={handleChange}
                      />
                      <MdOutlineRemoveRedEye
                        className="input-group-text cursor-pointer"
                        title="Show password"
                        size={18}
                        onClick={() =>
                          setTextType(
                            textType === "password" ? "text" : "password"
                          )
                        }
                      />
                    </div>
                    <div className="form-input col-lg-12">
                      <label htmlFor="email" className="form-label">
                        Confirm password
                        <span className="text-lime-300">*</span>
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Re-enter password"
                        name="passwordConfirm"
                        id="passwordConfirm"
                        value={form.passwordConfirm}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="d-grid mt-4">
                    <button type="submit" className="w-btn-secondary-lg">
                      Create Account
                    </button>
                  </div>
                </div>
              </Form>
              <div className="mt-3">
                <p className="text-center form-text">
                  Already have an account? <Link to="/sign-in">Sign in</Link>
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="login-img">
                <img
                  src={signupImage}
                  className="img-fluid w-100"
                  alt="Signup Illustration"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
