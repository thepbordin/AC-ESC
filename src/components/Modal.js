import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { RxCross1 } from "react-icons/rx";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Modal(props) {
  const { isOpen, handleClose } = props;

  const history = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [school, setSchool] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("sign in");

  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:4000/user/login", {
          username,
          password,
        })
        .then((res) => {
          if (res.data === "exist") {
            Swal.fire({
              title: "เข้าสู่ระบบเสร็จสิ้น",
              icon: "success",
              confirmButtonText: "ตกลง",
            });
            history("/register", { state: { id: username } });
          } else if (res.data === "notexist") {
            Swal.fire({
              title: "เข้าสู่ระบบล้มเหลว",
              text: "กรุณาตรวจสอบชื่อผู้ใช้หรือรหัสผ่าน",
              icon: "error",
              confirmButtonText: "ตกลง",
            });
          }
        })
        .catch((e) => {
          alert("Wrong details");
          console.log(e);
        });
    } catch (error) {
      console.log(error);
    }
  }

  const signup = (e) => {
    e.preventDefault();

    const dataObject = {
      name: name,
      school: school,
      username: username,
      password: password,
    };

    axios
      .post(`http://localhost:4000/user/register`, dataObject)
      .then((res) => {
        Swal.fire({
          title: "ลงทะเบียนเสร็จสิ้น",
          icon: "success",
          confirmButtonText: "ตกลง",
        });
      });

    setName("");
    setSchool("");
    setUsername("");
    setPassword("");
    setType("sign in");
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10 " onClose={handleClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 mt-20 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <a
                  className="fixed right-7 top-7 z-10 cursor-pointer rounded-full bg-white p-2 text-2xl text-gray-800 shadow-lg "
                  onClick={handleClose}
                >
                  <RxCross1 />
                </a>
                {/* Main Content */}

                {type === "sign in" ? (
                  <>
                    <img src="./img/signin.png" />
                    <div className="px-10 pb-10">
                      <form onSubmit={submit}>
                        <label>ชื่อผู้ใช้งาน</label>
                        <input
                          className="border-2 mb-5 mt-1 rounded-xl py-2 px-5 w-full border-gray-100 text-2xl ease-in-out duration-150 focus:outline-blue-500"
                          type="text"
                          name="username"
                          placeholder="Username"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          required
                        ></input>
                        <label>รหัสผ่าน</label>
                        <input
                          className="border-2 mb-5 mt-1 rounded-xl py-2 px-5 w-full border-gray-100 text-2xl ease-in-out duration-150 focus:outline-blue-500"
                          type="password"
                          name="password"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        ></input>
                        <input
                          className="cursor-pointer my-3 rounded-xl px-5 py-3 font-bold w-full bg-blue-500 text-white text-2xl ease-in-out duration-150 hover:bg-blue-700 "
                          type="submit"
                          value="เข้าสู่ระบบ"
                        ></input>
                      </form>
                      <p className="text-center text-xl text-[#2a384a]">
                        ยังไม่มีบัญชี?{" "}
                        <span
                          className="text-blue-500 font-bold cursor-pointer"
                          onClick={() => setType("register")}
                        >
                          ลงทะเบียน
                        </span>
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <img src="./img/signup.png" />
                    <div className="px-10 pb-10">
                      <form onSubmit={signup}>
                        <label>ชื่อ - สกุล</label>
                        <input
                          className="border-2 mb-5 mt-1 rounded-xl py-2 px-5 w-full border-gray-100 text-2xl ease-in-out duration-150 focus:outline-blue-500"
                          type="text"
                          name="name"
                          placeholder="Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        ></input>
                        <label>โรงเรียน</label>
                        <input
                          className="border-2 mb-5 mt-1 rounded-xl py-2 px-5 w-full border-gray-100 text-2xl ease-in-out duration-150 focus:outline-blue-500"
                          type="text"
                          name="school"
                          placeholder="School"
                          value={school}
                          onChange={(e) => setSchool(e.target.value)}
                          required
                        ></input>
                        <label>ชื่อผู้ใช้งาน</label>
                        <input
                          className="border-2 mb-5 mt-1 rounded-xl py-2 px-5 w-full border-gray-100 text-2xl ease-in-out duration-150 focus:outline-blue-500"
                          type="text"
                          name="username"
                          placeholder="Username"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          required
                        ></input>
                        <label>รหัสผ่าน</label>
                        <input
                          className="border-2 mb-5 mt-1 rounded-xl py-2 px-5 w-full border-gray-100 text-2xl ease-in-out duration-150 focus:outline-blue-500"
                          type="password"
                          name="password"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        ></input>
                        <input
                          className="cursor-pointer my-3 rounded-xl px-5 py-3 font-bold w-full bg-blue-500 text-white text-2xl ease-in-out duration-150 hover:bg-blue-700 "
                          type="submit"
                          value="ลงทะเบียน"
                          required
                        ></input>
                      </form>

                      <p className="text-center text-xl text-[#2a384a]">
                        มีบัญชีอยู่แล้ว?{" "}
                        <span
                          className="text-blue-500 font-bold cursor-pointer"
                          onClick={() => setType("sign in")}
                        >
                          เข้าสู่ระบบ
                        </span>
                      </p>
                    </div>
                  </>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
