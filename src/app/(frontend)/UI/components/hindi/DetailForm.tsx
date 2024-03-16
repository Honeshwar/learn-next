import { useEffect, useState } from "react";

function DetailForm({
  step,
  states,
  setStates,
  setStep,
}: {
  step: number;
  states: any;
  setStates: any;
  setStep: Function;
}) {
  const [details, setDetails] = useState({
    name: "",
    age: "",
    gender: "",
    state: "",
    district: "",
  });
  const [districts, setDistricts] = useState([]);
  const [stateId, setStateId] = useState(-1);
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");

  //   useEffect(() => {
  //     fetch(`https://mahathugbandhan.com/api/v1/get_district?language=${"hi"}`)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log("get allstates ", data);
  //         if (data?.status >= 200 && data?.status < 300) {
  //           setStates(data.result);
  //         } else {
  //           console.log(data);
  //         }
  //       });
  //   }, []);
  useEffect(() => {
    if (
      JSON.stringify(details) !==
      '{"name":"","age":"","gender":"","state":"","district":""}'
    ) {
      const body = new FormData();
      body.append("name", details.name);
      body.append("age", details.age);
      body.append("gender", details.gender);
      body.append("state", details.state);
      body.append("district", details.district);
      body.append("mobile", localStorage.getItem("mobile")!);
      fetch(`https://mahathugbandhan.com/api/v1/user/update`, {
        method: "PATCH",
        body,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("submit details success ", data);
          if (data?.status >= 200 && data?.status < 300) {
            setStep(4);
          } else {
            console.log(data);
          }
        });
    }
  }, [details]);
  useEffect(() => {
    async function getDistrict(stateId: number) {
      console.log("click option");
      const response = await fetch(
        `https://mahathugbandhan.com/api/v1/get_ac_from_district?district_id=${stateId}&language=${"hi"}`
      );
      const responseData = await response.json();
      console.log("all districts", responseData);
      if (responseData.status >= 200 && responseData.status < 300) {
        setDistricts(responseData.result);
      } else {
        console.log(responseData);
      }
    }

    if (stateId !== -1) {
      getDistrict(stateId);
    }
  }, [stateId]);
  const submitDetailHandler = (e: any) => {
    e.preventDefault();
    console.log(name, age, gender, state, district);
    setError("");
    if (gender === "") {
      setError("** Select Gender!");
      return;
    } else if (state === "") {
      setError("** Select State!");
      return;
    } else if (district === "") {
      setError("** Select District!");
      return;
    }

    setDetails({
      name: name,
      age: age,
      gender: gender,
      state: state,
      district: district,
    });
  };

  const stateHandler = (e: any) => {
    e.preventDefault();
    setStateId(e.target.value);
    setState(e.target.value);
  };

  return (
    <>
      {step === 3 && (
        <div
          id="detail-form"
          className=" overflow-y-auto overflow-x-hidden fixed top-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%)] max-h-full "
          style={{ backgroundColor: "#181844c0" }}
        >
          <div className="w-full h-full sm:w-fit sm:h-fit justify-center items-center">
            <div className="relative p-4 w-full max-w-md max-h-full">
              {/* <!-- Modal content --> */}
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 font-yatra">
                {/* <!-- Modal header --> */}
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                  <h3 className=" font-semibold text-gray-900 dark:text-white text-center font-[inherit] text-[1.2rem] sm:text-[1.5rem]">
                    रजिस्ट्रेशन की प्रक्रिया पूरी करने के लिए नीचे दिया फॉर्म
                    भरें
                  </h3>
                  {/* <!-- close btn --> */}
                </div>

                {/* <!-- Modal body --> */}
                <form className="p-4 md:p-5" onSubmit={submitDetailHandler}>
                  {/* <!-- show error --> */}
                  <div
                    id="detail-form-error"
                    className="text-[red] font-bold flex justify-center"
                  >
                    {error}
                  </div>
                  <div className="grid gap-4 mb-4 grid-cols-2">
                    <div className="col-span-2 ">
                      <label
                        htmlFor="name"
                        className="block mb-2  text-[1.2rem] sm:text-[1.5rem] font-medium text-gray-900 dark:text-white font-[inherit]"
                      >
                        नाम
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500  text-[1.2rem] sm:text-[1.2rem]"
                        placeholder="अपना नाम दर्ज करें"
                        required
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <label
                        htmlFor="age"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white font-[inherit]  text-[1.2rem] sm:text-[1.2rem]"
                      >
                        आयु
                      </label>
                      <input
                        type="number"
                        name="age"
                        id="age"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500  text-[1.2rem] sm:text-[1.2rem]"
                        placeholder="अपनी आयु दर्ज करें"
                        required
                        onChange={(e) => setAge(e.target.value)}
                      />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <label
                        htmlFor="gender"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white font-[inherit]  text-[1.2rem] sm:text-[1.2rem]"
                      >
                        लिंग
                      </label>
                      <select
                        id="gender"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500  text-[1.2rem] sm:text-[1.2rem]"
                        required
                        defaultValue="अपना लिंग चुनें"
                        onChange={(e) => setGender(e.target.value)}
                      >
                        <option disabled className="font-[inherit]">
                          अपना लिंग चुनें
                        </option>
                        <option value="Male" className="font-[inherit]">
                          पुरुष
                        </option>
                        <option value="Female" className="font-[inherit]">
                          महिला
                        </option>
                        <option value="Others" className="font-[inherit]">
                          अन्य
                        </option>
                      </select>
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <label
                        htmlFor="state"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white font-[inherit]  text-[1.2rem] sm:text-[1.2rem]"
                      >
                        राज्य
                      </label>
                      <select
                        id="state"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500  text-[1.2rem] sm:text-[1.2rem]"
                        required
                        defaultValue="अपना राज्य चुनें"
                        onChange={stateHandler}
                      >
                        <option disabled className="font-[inherit]">
                          अपना राज्य चुनें
                        </option>
                        {states.map((state: any) => (
                          <option value={state.id} key={state.id}>
                            {state.district_name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <label
                        htmlFor="district"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white font-[inherit]  text-[1.2rem] sm:text-[1.2rem]"
                      >
                        ज़िला
                      </label>
                      <select
                        id="district"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500  text-[1.2rem] sm:text-[1.2rem]"
                        required
                        defaultValue="अपना ज़िला चुनें"
                        onChange={(e) => setDistrict(e.target.value)}
                      >
                        <option disabled className="font-[inherit]">
                          अपना ज़िला चुनें
                        </option>
                        {districts.map((district: any) => (
                          <option value={district.id} key={district.id}>
                            {district.ac_name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="flex justify-center pt-5">
                    <button
                      type="submit"
                      className="text-white inline-flex justify-center items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 pt-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-[inherit]  text-[1.2rem] sm:text-[1.5rem]"
                    >
                      विवरण जमा करें
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DetailForm;
