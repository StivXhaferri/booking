import { useState , useEffect } from "react"

const Faq = () => {




    const [arr, setArr] = useState([false, false, false, false, false]);

    const openFaq = (num) => {
        const newArr = [...arr]; // Create a copy of the array
        newArr[num] = !newArr[num]; // Toggle the value at the specified index
        setArr(newArr); // Update the state with the modified array
    };





    return(
        <div  className="px-[10%]  py-0-10" id="faq" >
            <h2 className="text-2xl font-bold bg-[#B9FF66] inline-block text-black">FAQ</h2>
            <br />
            <br/>
            <br/>
            <br/>
            <div className={arr[0]  === true ? "faq w-[80%] sm:w-full mx-auto my-2  bg-[#B9FF66]  p-3 rounded-lg border-2  border-[black]" :  "faq w-[80%] sm:w-full mx-auto my-2  bg-[white]  p-3 rounded-lg  border-2 border-black "}>
                <div className="p-3 flex w-[90%] mx-auto">
                    <div className="w-[70%] flex gap-3 items-center">
                        <h2 className="text-3xl font-bold"></h2>
                        <h1 className="text-3xl font-bold">Sa kohë merr një riparim tipik në Edi Shop?</h1>
                    </div>
                    <div className="w-[30%] flex justify-end">
                        <h2 className="cursor-pointer bg-white rounded-full font-bold text-3xl  p-3 border-2 border-solid h-[3rem] w-[3rem] flex items-center"  onClick={() => openFaq(0)} >+</h2>
                    </div>
                </div>
                <div className={arr[0] === true ? 'block' : 'hidden'}>
                    <div className="text-[black] p-[0.5px] w-[90%] mx-auto my-2  bg-[black]" />
                    <p className="w-[90%] text-[black] mx-auto ">
                    Kohëzgjatja e riparimit ndryshon në bazë të kompleksitetit të problematikës. Ne përpiqemi për efikasitet dhe synojmë të kthejmë pajisjen tuaj sa më shpejt të jetë e mundur, pa kompromentuar në cilësi.
                    </p>
                </div>
            </div>


            <div className={arr[1]  === true ? "faq w-[80%] sm:w-full mx-auto my-2  bg-[#B9FF66]  p-3 rounded-lg border-2  border-[black]" :  "faq w-[80%] sm:w-full mx-auto my-2  bg-[white]  p-3 rounded-lg  border-2 border-black "}>
                <div className="p-3 flex w-[90%] mx-auto">
                    <div className="w-[70%] flex gap-3 items-center">
                        <h2 className="text-3xl font-bold"></h2>
                        <h1 className="text-3xl font-bold">Si siguroni privatësinë e të dhënave të mia gjatë riparimeve?</h1>
                    </div>
                    <div className="w-[30%] flex justify-end">
                        <h2 className="cursor-pointer bg-white rounded-full font-bold text-3xl  p-3 border-2 border-solid h-[3rem] w-[3rem] flex items-center"  onClick={() => openFaq(1)} >+</h2>
                    </div>
                </div>
                <div className={arr[1] === true ? 'block' : 'hidden'}>
                    <div className="text-[black] p-[0.5px] w-[90%] mx-auto my-2  bg-[black]" />
                    <p className="w-[90%] text-[black] mx-auto ">
                    Në Edi Shop, i kemi seriozisht çështjet e privatësisë së të dhënave. Teknikët tanë ndjekin protokolle të rrepta për të mbrojtur informacionin tuaj personal. Nëse riparimi kërkon qasje në të dhënat tuaja, mund të jeni të sigurt se ne i trajtojmë ato me konfidencialitet dhe kujdes të plotë.
                    </p>
                </div>
            </div>



            <div className={arr[2]  === true ? "faq w-[80%] sm:w-full mx-auto my-2  bg-[#B9FF66]  p-3 rounded-lg border-2  border-[black]" :  "faq w-[80%] sm:w-full mx-auto my-2  bg-[white]  p-3 rounded-lg  border-2 border-black "}>
                <div className="p-3 flex w-[90%] mx-auto">
                    <div className="w-[70%] flex gap-3 items-center">
                        <h2 className="text-3xl font-bold"></h2>
                        <h1 className="text-3xl font-bold">Çfarë llojish pajisjesh riparoni dhe punoni me të gjitha markat?</h1>
                    </div>
                    <div className="w-[30%] flex justify-end">
                        <h2 className="cursor-pointer bg-white rounded-full font-bold text-3xl  p-3 border-2 border-solid h-[3rem] w-[3rem] flex items-center"  onClick={() => openFaq(2)} >+</h2>
                    </div>
                </div>
                <div className={arr[2] === true ? 'block' : 'hidden'}>
                    <div className="text-[black] p-[0.5px] w-[90%] mx-auto my-2  bg-[black]" />
                    <p className="w-[90%] text-[black] mx-auto ">
                    Edi Shop specializohet në riparimin e një game të gjerë pajisjesh, përfshirë smartphone, tableta dhe kompjuterë. Kemi përvojë me shumë marka dhe modele të ndryshme. Nëse keni një shqetësim të veçantë, mos ngurroni të na kontaktoni, dhe ekipi ynë do t'ju ofrojë udhëzime për pajisjen tuaj.
                    </p>
                </div>
            </div>




            <div className={arr[3]  === true ? "faq w-[80%] sm:w-full mx-auto my-2  bg-[#B9FF66]  p-3 rounded-lg border-2  border-[black]" :  "faq w-[80%] mx-auto my-2 sm:w-full  bg-[white]  p-3 rounded-lg  border-2 border-black "}>
                <div className="p-3 flex w-[90%] mx-auto">
                    <div className="w-[70%] flex gap-3 items-center">
                        <h2 className="text-3xl font-bold"></h2>
                        <h1 className="text-3xl font-bold">
                        Si mund të di çmimin e riparimit para se të vazhdoj?
                        </h1>
                    </div>
                    <div className="w-[30%] flex justify-end">
                        <h2 className="cursor-pointer bg-white rounded-full font-bold text-3xl  p-3 border-2 border-solid h-[3rem] w-[3rem] flex items-center"  onClick={() => openFaq(3)} >+</h2>
                    </div>
                </div>
                <div className={arr[3] === true ? 'block' : 'hidden'}>
                    <div className="text-[black] p-[0.5px] w-[90%] mx-auto my-2  bg-[black]" />
                    <p className="w-[90%] text-[black] mx-auto ">
                    Për të siguruar transparencë, Edi Shop ofron vlerësime fillestare falas. Sapështuar teknikët tanë zbulojnë problemën, do të merrni një kuotë të detajuar që përfshin kostot e riparimit. Pa tarifa të fshehura ose surpriza - ne besojmë në çmime të qarta dhe sigurojmë që të keni të gjitha informacionet para se të vazhdoni me riparimin.
                    </p>
                </div>
            </div>




            <div className={arr[4]  === true ? "faq w-[80%] sm:w-full mx-auto my-2  bg-[#B9FF66]  p-3 rounded-lg border-2  border-[black]" :  "faq w-[80%] sm:w-full mx-auto my-2  bg-[white]  p-3 rounded-lg  border-2 border-black "}>
                <div className="p-3 flex w-[90%] mx-auto">
                    <div className="w-[70%] flex gap-3 items-center">
                        <h2 className="text-3xl font-bold"></h2>
                        <h1 className="text-3xl font-bold">Çfarë llojish problemesh mund të riparojë Edi Shop?</h1>
                    </div>
                    <div className="w-[30%] flex justify-end">
                        <h2 className="cursor-pointer bg-white rounded-full font-bold text-3xl  p-3 border-2 border-solid h-[3rem] w-[3rem] flex items-center"  onClick={() => openFaq(4)} >+</h2>
                    </div>
                </div>
                <div className={arr[4] === true ? 'block' : 'hidden'}>
                    <div className="text-[black] p-[0.5px] w-[90%] mx-auto my-2  bg-[black]" />
                    <p className="w-[90%] text-[black] mx-auto ">
                    Edi Shop specializohet në zgjidhjen e një game të gjerë problematikash në pajisje, përfshirë ekrane të thyera, dëme nga uji, gabime softuerike dhe disfunksione aparative. Pavarësisht nëse është një smartphone, tabletë, apo kompjuter, teknikët tanë të përvojuar kanë ekspertizën për të diagnostikuar dhe adresuar çështje të ndryshme. Nëse keni një shqetësim të veçantë, mos ngurroni të na kontaktoni për asistencë personalizuar.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Faq