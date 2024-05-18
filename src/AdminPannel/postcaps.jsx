import React, { useEffect, useState } from "react";

function PostCapsData() {
    const [formData, setformData] = useState({
        proimg: null,
        prohoverimg: null,
        pro3img: null,
        color: '',
        size: '',
        proname: '',
        proDetail: '',
        price: '',
        mrp: '',
        highlight1: '',
        highlight2: '',
        highlight3: '',
        highlight4: '',
        highlight5: '',
        category: '',
        tags: ''
    });

    const handelinputchange = (e) => {
        setformData({
            ...formData,
            [e.target.name]: e.target.value
        })
    };
    const handelfilechange = (e) => {
        setformData({
            ...formData,
            [e.target.name]: e.target.files[0]
        })
    };

    async function postPro(a) {
        a.preventDefault();
        const Data = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            Data.append(key, value)
        })

        try {
            const res = await fetch(`http://localhost:4400/postcap`, {
                method: "POST",
                body: Data,

            })
            const getres = await res.json()
            window.location.reload()
        } catch (error) {
            alert(error, "something went wrong")
        }
    }


    const [postDataaa, setpostDataaa] = useState([])
    // const [postcapp, setpostcapp] = useState([...postDataaa])
    async function Getpro() {
        const res = await fetch(`http://localhost:4400/getcap`)
        const getres = await res.json()
        setpostDataaa(getres)
        // setpostcapp(getres)
    }
    useEffect(() => {
        Getpro()
    }, [])

    return (
        <>
            <form>
                <input type="file" placeholder="proimg" name="proimg" onChange={handelfilechange} /><br />
                <input type="file" placeholder="prohoverimg" onChange={handelfilechange} /><br />
                <input type="file" placeholder="pro3img" onChange={handelfilechange} /><br />
                <input type="text" placeholder="color" onChange={handelinputchange} /><br />
                <input type="number" placeholder="size" onChange={handelinputchange} /><br />
                <input type="text" placeholder="proname" onChange={handelinputchange} /><br />
                <input type="text" placeholder="caption" name="caption" onChange={handelinputchange} /><br />
                <input type="text" placeholder="prodetail" onChange={handelinputchange} /><br />
                <input type="number" placeholder="price" onChange={handelinputchange} /><br />
                <input type="number" placeholder="mrp" onChange={handelinputchange} /><br />
                <input type="text" placeholder="highlight1" onChange={handelinputchange} /><br />
                <input type="text" placeholder="highlight2" onChange={handelinputchange} /><br />
                <input type="text" placeholder="highlight3" onChange={handelinputchange} /><br />
                <input type="text" placeholder="highlight4" onChange={handelinputchange} /><br />
                <input type="text" placeholder="highlight5" onChange={handelinputchange} /><br />
                <input type="text" placeholder="tags" onChange={handelinputchange} /><br />
                <input type="text" placeholder="category" onChange={handelinputchange} /><br />
                <button type="submit" onClick={postPro}>Submit</button>
            </form>
            
            {
                postDataaa.map((itm) => {
                    return (
                        <>
                            <img src={itm.proimg} alt="img" />
                            <img src={itm.prohoverimg} alt="img" />
                            <img src={itm.pro3img} alt="img" />
                            <h3>{itm.caption}</h3>
                        </>
                    )
                })
            }

        </>
    )
}
export { PostCapsData }
