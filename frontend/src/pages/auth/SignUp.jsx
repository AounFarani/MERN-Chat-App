import { Link } from 'react-router-dom'
import { useState } from 'react'
import GenderCheckbox from '../../components/signup/GenderCheckBox'
import useSignUp from '../../hooks/useSignUp';

const SignUp = () => {
    const [inputs, setInputs] = useState({
        fullName: "",
        userName: "",
        password: "",
        confirmPassword: "",
        gender: "",
    });

    const { loading, signUp } = useSignUp();

    const handleCheckboxChange = (gender) => {
        setInputs({ ...inputs, gender });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signUp(inputs);
    };

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className='text-3xl font-semibold text-center text-gray-300'>
                    Sign Up
                    <span className='text-blue-500'> Chat App</span>
                </h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="input input-bordered flex items-center gap-5 mt-5">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                            </svg>
                            <input type="text" className="grow" placeholder="Enter Full Name" value={inputs.fullName}
                                onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })} />
                        </label>
                        <label className="input input-bordered flex items-center gap-5 mt-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                            </svg>
                            <input type="text" className="grow" placeholder="Enter Username" value={inputs.userName}
                                onChange={(e) => setInputs({ ...inputs, userName: e.target.value })} />
                        </label>
                        <label className="input input-bordered flex items-center gap-5 mt-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    fillRule="evenodd"
                                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                    clipRule="evenodd" />
                            </svg>
                            <input type="password" className="grow" placeholder='Enter Password' value={inputs.password}
                                onChange={(e) => setInputs({ ...inputs, password: e.target.value })} />
                        </label>
                        <label className="input input-bordered flex items-center gap-5 mt-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    fillRule="evenodd"
                                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                    clipRule="evenodd" />
                            </svg>
                            <input type="password" className="grow" placeholder='Confirm Password' value={inputs.confirmPassword}
                                onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })} />
                        </label>
                    </div>

                    <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

                    <Link to={'/login'} className='text-sm text-gray-300 hover:underline hover:text-blue-600 inline-block float-right'>
                        Already have an account?
                    </Link>
                    <div>
                        <button className='btn btn-primary btn-block btn-sm mt-2 border border-slate-700' disabled={loading}>
                            {loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
                        </button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default SignUp

// STARTER CODE
// const SignUp = () => {
//     return (
//         <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//             <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//                 <h1 className='text-3xl font-semibold text-center text-gray-300'>
//                     Sign Up
//                     <span className='text-blue-500'> Chat App</span>
//                 </h1>

//                 <form>
//                     <div>
//                         <label className="input input-bordered flex items-center gap-5 mt-5">
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 viewBox="0 0 16 16"
//                                 fill="currentColor"
//                                 className="h-4 w-4 opacity-70">
//                                 <path
//                                     d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
//                             </svg>
//                             <input type="text" className="grow" placeholder="Enter Full Name" />
//                         </label>
//                         <label className="input input-bordered flex items-center gap-5 mt-2">
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 viewBox="0 0 16 16"
//                                 fill="currentColor"
//                                 className="h-4 w-4 opacity-70">
//                                 <path
//                                     d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
//                             </svg>
//                             <input type="text" className="grow" placeholder="Enter Username" />
//                         </label>
//                         <label className="input input-bordered flex items-center gap-5 mt-2">
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 viewBox="0 0 16 16"
//                                 fill="currentColor"
//                                 className="h-4 w-4 opacity-70">
//                                 <path
//                                     fillRule="evenodd"
//                                     d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
//                                     clipRule="evenodd" />
//                             </svg>
//                             <input type="password" className="grow" placeholder='Enter Password' />
//                         </label>
//                         <label className="input input-bordered flex items-center gap-5 mt-2">
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 viewBox="0 0 16 16"
//                                 fill="currentColor"
//                                 className="h-4 w-4 opacity-70">
//                                 <path
//                                     fillRule="evenodd"
//                                     d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
//                                     clipRule="evenodd" />
//                             </svg>
//                             <input type="password" className="grow" placeholder='Confirm Password' />
//                         </label>
//                     </div>

//                     <GenderCheckbox />

//                     <a href="" className='text-sm text-gray-300 hover:underline hover:text-blue-600 inline-block float-right'>
//                         Already have an account?
//                     </a>
//                     <div>
//                         <button className='btn btn-primary btn-block btn-sm mt-2'>Sign Up</button>
//                     </div>
//                 </form>

//             </div>
//         </div>
//     )
// }

// export default SignUp