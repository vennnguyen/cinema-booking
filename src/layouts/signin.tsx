import React from "react";
import Eye from "../components/icon/eyeFlash";
import { z } from "zod"; // validate dữ liệu
import { useForm } from "react-hook-form"; // quản lí trạng thái và sự kiện của form
import { zodResolver } from "@hookform/resolvers/zod"; //giúp kết nối zod với hookform
import Close from "../components/icon/close";
// import { useNavigate } from "react-router-dom";
// import { useAuthStore } from "@/stores/useAuthStore";

interface SigninProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const signInSchema = z.object({
  email: z.email("Email không hợp lệ"),
  password: z.string().min(6, "Mật khẩu phải có ít nhất 6 kí tự"),
});
type SignInFormValues = z.infer<typeof signInSchema>;

const Signin: React.FC<SigninProps> = ({ open, setOpen }) => {
  // const navigate = useNavigate();
  const {
    register,
    handleSubmit,reset,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormValues>({
    resolver: zodResolver(signInSchema), // để kết nối useForm với zod đã định nghĩa
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSubmit = async (data: SignInFormValues) => {
    const { email, password } = data;
    //  await signIn(email,password)
    console.log(email, password);
    reset()
    setOpen(false);
    //     setTimeout(() => {
    //   navigate(0);
    // }, 1000); load lại trang
  };
  return (
    <div
      className={`fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black/60 backdrop-blur-sm transition-opacity duration-300
      ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
    >
      <div className="relative max-w-[400px] min-w-[200px] rounded-sm px-6 py-10 m-0 bg-white shadow-sm">
        <div className="sm:w-[350px]">
          <div className=" text-center mb-4 ">
            <img
              src="/images/icon-login.svg"
              alt="icon-login"
              className="my-0 mx-auto object-cover duration-500 ease-in-out group-hover:opacity-100 scale-100 blur-0 grayscale-0"
              width="190"
              height="120"
            />
            <h5 className="text-lg font-bold not-italic py-2 capitalize">
              Đăng nhập tài khoản
            </h5>
          </div>

          {/* form */}
          <div className="login-form">
            <form action="" onSubmit={handleSubmit(onSubmit)}>
              {/* email */}
              <label className="text-xs block font-bold not-italic text-[#777777]">
                Email
              </label>
              <span className="w-full mb-1 relative h-auto border border-gray-200 rounded-sm inline-flex items-center min-w-0 text-sm bg-white rounded transition-all duration-300">
                <input
                  type="text"
                  placeholder="Nhập Email"
                  className="bg-transparent w-full h-9 focus:ring-2 focus:outline-blue-500 focus:rounded px-2"
                  {...register("email")}
                />
              </span>
              {errors.email && (
                <p className="text-red-400 text-sm">{errors.email.message}</p>
              )}
              {/* password */}
              <label className="text-xs block font-bold not-italic text-[#777777]">
                Mật khẩu
              </label>
              <span className="w-full mb-1 relative h-auto border border-gray-200 rounded-sm inline-flex items-center min-w-0 text-sm bg-white rounded transition-all duration-300">
                <input
                  type="password"
                  placeholder="Nhập Mật khẩu"
                  className="bg-transparent w-full h-9 focus:ring-2 focus:outline-blue-500 focus:rounded px-2"
                  {...register("password")}
                />
                <Eye />
              </span>
              {errors.password && (
                <p className="text-red-400 text-sm">
                  {errors.password.message}
                </p>
              )}
              {/* submit */}
              <button
                type="submit"
                className="rounded-md hover:bg-[#e38601] transition-all duration-30 min-w-[135px] w-full focus:outline-none focus:ring-[#e38601] text-sm text-center inline-flex items-center dark:hover:bg-[#e38601] dark:focus:ring-[#e38601] justify-center text-white bg-[#F58020] w-full h-full px-5 py-2.5 uppercase mt-5 false"
                disabled={isSubmitting}
              >
                <span className="block">Đăng nhập</span>{" "}
              </button>
              {/*  */}
            </form>
          </div>
        </div>
        {/* button close */}
        <button className="closeButton" onClick={()=>{setOpen(!open)
          reset()
        }}>
          <span
            className="inline-flex bg-grey-100 rounded-full w-[24px] h-[24px] items-center justify-center hover:bg-gray-300"
            
          >
            <Close/>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Signin;
