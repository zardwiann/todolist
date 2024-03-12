import '../App.css'

export default function MainApp() {

    return (
        <section >
            <header className='p-3 bg-white'></header>

            <div className=" d-flex align-items-center min-vh-100">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1 className=" text-center text-white header1 ">TODO LIST APPLICATION</h1>
                            <div className='mt-5'>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Select Theme</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>

                            <div className='mt-3'>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Select Font</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>

                            <div className='mt-3 text-center row m-1'>
                                <button className='btn btn-outline-secondary  btn-next '>Next</button>
                            </div>

                        </div>


                    </div>

                </div>

            </div>
        </section>
    )
}