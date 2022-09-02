const initialState = [
    {
        id: 1,
        title: "Feel the moment, Touch the world",
        author: "Johny Jet",
        time: "11 july 2022",
        read_time: "6 min read",
        category: "Travel",
        auth_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB_mpdTkAOjNZ8_N9SNFkzq7XCHXP81acoXPoHCRNi1o7IQk3EMPXwcA7kEVjw9jMHXos&usqp=CAU",
        img: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
        id: 2,
        title: "Snia Snapper Veracruzana",
        author: "Sharmin Lucky",
        time: "22 August 2022",
        read_time: "3 min read",
        category: "FOOD",
        auth_img: "https://simg.nicepng.com/png/small/182-1829287_cammy-lin-ux-designer-circle-picture-profile-girl.png",
        img: "https://media.istockphoto.com/photos/asian-food-fish-sticks-noodles-seafood-samsa-on-a-blue-wooden-top-picture-id1073857510?k=20&m=1073857510&s=612x612&w=0&h=tmicZpOSFRR5sTjjx-7vLkJIXE_4CBHxpUSl9WNP39c="
    },
    {
        id: 3,
        title: "Pezzetti di cavallo",
        author: "Sharmin Lucky",
        time: "20 june 2022",
        read_time: "9 min read",
        category: "FOOD",
        auth_img: "https://simg.nicepng.com/png/small/182-1829287_cammy-lin-ux-designer-circle-picture-profile-girl.png",
        img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 4,
        title: "Kick out from the house for photography",
        author: "Johny Jet",
        time: "08 Feb, 2022",
        read_time: "11 min read",
        category: "Photography",
        auth_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB_mpdTkAOjNZ8_N9SNFkzq7XCHXP81acoXPoHCRNi1o7IQk3EMPXwcA7kEVjw9jMHXos&usqp=CAU",
        img: "https://images.unsplash.com/photo-1520390138845-fd2d229dd553?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
    },

    {
        id: 5,
        title: "To See World, need to fly",
        author: "Johny Jet",
        time: "28 july 2022",
        read_time: "30 min read",
        category: "Travel",
        auth_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB_mpdTkAOjNZ8_N9SNFkzq7XCHXP81acoXPoHCRNi1o7IQk3EMPXwcA7kEVjw9jMHXos&usqp=CAU",
        img: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
        id: 6,
        title: "Happiness begins with good health say doctor",
        author: "Dr. Edward Jenner",
        time: "11 july 2022",
        read_time: "6 min read",
        category: "Health",
        auth_img: "https://newassets.apollo247.com/doctors/noimagemale.png",
        img: "https://images.unsplash.com/photo-1535914254981-b5012eebbd15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
        id: 7,
        title: "Doctor is your friend, Don't hide",
        author: "Dr. Edward Jenner",
        time: "25 july 2022",
        read_time: "6 min read",
        category: "Health",
        auth_img: "https://newassets.apollo247.com/doctors/noimagemale.png",
        img: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
        id: 8,
        title: "Fashion attracts us, Beauty changes us",
        author: "Ralph Lauren",
        time: "11 july 2022",
        read_time: "6 min read",
        category: "Fashion & Beauty",
        auth_img: "https://images.squarespace-cdn.com/content/v1/55d8d6d6e4b0df6437173106/1599501301669-F2TS0C3FE0C9RA75HVIQ/KJC+Circle.png?format=1000w",
        img: "https://images.unsplash.com/photo-1537832816519-689ad163238b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=859&q=80"
    },
    {
        id: 9,
        title: "Content Creating is happiness",
        author: "Johny Jet",
        time: "11 july 2022",
        read_time: "6 min read",
        category: "Article",
        auth_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB_mpdTkAOjNZ8_N9SNFkzq7XCHXP81acoXPoHCRNi1o7IQk3EMPXwcA7kEVjw9jMHXos&usqp=CAU",
        img: "https://www.befunky.com/images/wp/wp-2017-10-Blog-Title-Images-13.jpg?auto=avif,webp&format=jpg&width=1200&crop=16:9"
    }

]

export default initialState;