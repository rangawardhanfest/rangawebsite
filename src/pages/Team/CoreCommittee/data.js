
const teams = [{
        img: "https://res.cloudinary.com/dcir5216l/image/upload/v1726861339/yashbahiram_drakuv.jpg",
        name: "Yash Bahiram",
        Post: "Secretary",
        l: "https://www.linkedin.com/in/nidhi-mhaske-988316251",
        i: "https://instagram.com/_mhaskenidhi_07?igshid=OGQ5ZDc2ODk2ZA==",
        m: "mailto: nidhimhaske07@gmail.com",
    },
    {
        img: "https://res.cloudinary.com/dcir5216l/image/upload/v1726859995/vedika_u1lntc.jpg",
        name: "Vedika Bharmal",
        Post: "Secretary",
        l: "",
        i: "https://instagram.com/crazybot_?igshid=MmVlMjlkMTBhMg==",
        m: "mailto: vnratnaparkhi_b21@ee.vjti.ac.in",
    },
    {
        img: "https://res.cloudinary.com/dcir5216l/image/upload/v1726293436/Kalpesh_Deshmukh___Chief_Coordinator__iwdwx7.jpg",
        name: "Kalpesh Deshmukh",
        Post: "Chief Coordinator",
        l: "https://www.linkedin.com/in/kalyani-shirsath-81123518b",
        i: "https://www.instagram.com/kalyani_shirsath17/",
        m: "mailto: ksshrisath_b21@it.vjti.ac.in",
    },
    {
        img:"https://res.cloudinary.com/dcir5216l/image/upload/v1726293429/Shrutika_Rode_Chief_Coordinator_mqv7kj.jpg",
        name: "Shrutika Rode",
        Post: "Chief Coordinator",
        l: "https://www.linkedin.com/in/athashree-patil-4433b8285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        i: "https://instagram.com/dazzle_patil?igshid=YzAwZjE1ZTI0Zg==",
        m: "mailto: aapatil_b21@ee.vjti.ac.in",
    },

    {
        img: "https://res.cloudinary.com/dcir5216l/image/upload/v1726294336/Sai_Sonawane_Treasure_xs0bow.jpg",
        name: "Sai Sonawane",
        Post: "Treasurer",
        l: "https://www.linkedin.com/in/kashyap-chavhan-68052b205/",
        i: "https://www.instagram.com/_aniruddha_tathe?igsh=OGQ5ZDc2ODk2ZA==",
        m: "mailto: kdchavhan_b20@it.vjti.ac.in",
    },
    {
        img: "https://res.cloudinary.com/dcir5216l/image/upload/v1726294328/Vedant_Bhosale_Treasurer__zut6np.jpg",
        name: "Vedant Bhosale",
        Post: "Treasurer",
        l: "https://www.linkedin.com/in/shrinath-bhosale-2a2154244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        i: "",
        m: "mailto: shrinathbhosale2809@gmail.com",
    },
    {
        img: "https://res.cloudinary.com/dcir5216l/image/upload/v1726293734/Pratiksha_Savandakar_Diploma_Coordinator_ndnaho.jpg",
        name: "Pratiksha Savandkar",
        Post: "Diploma Coordinator",
        l: "https://www.linkedin.com/in/athashree-patil-4433b8285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        i: "https://instagram.com/dazzle_patil?igshid=YzAwZjE1ZTI0Zg==",
        m: "mailto: aapatil_b21@ee.vjti.ac.in",
    },
    {
        img: "https://res.cloudinary.com/dcir5216l/image/upload/v1726293741/Smit_Nagarkar_Diploma_Coordinator_bhcn4y.jpg",
        name: "Smit Nagarkar",
        Post: "Diploma Coordinator",
        l: "https://www.linkedin.com/in/athashree-patil-4433b8285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        i: "https://instagram.com/dazzle_patil?igshid=YzAwZjE1ZTI0Zg==",
        m: "mailto: aapatil_b21@ee.vjti.ac.in",
    },
];


const sectorHeads = [
    // Chief Execution Officer
    {
        img:"https://res.cloudinary.com/dcir5216l/image/upload/v1726869338/Vedant_Wadu_Execution_Chief_Officer_lfxr5e.jpg",
        name: "Vedant Wadu",
        Post: "Chief Execution Officer",
        l: "https://www.linkedin.com/in/adarsh-karande-547b0b20a",
        i: "https://www.instagram.com/dhan_shree_04/",
        m: "mailto: dgmalewar_b21@ci.vjti.ac.in",
    },
    {
        img: "https://res.cloudinary.com/dcir5216l/image/upload/v1726869341/Shruti_Jawale_Execution_Chief_Officer_wbaf5d.jpg",
        name: "Shruti Jawale",
        Post: "Chief Execution Officer",
        l: "https://www.linkedin.com/in/adarsh-karande-547b0b20a",
        i: "https://www.instagram.com/dhan_shree_04/",
        m: "mailto: dgmalewar_b21@ci.vjti.ac.in",
    },
    {
        img:"https://res.cloudinary.com/dcir5216l/image/upload/v1726293820/Shubham_Wagale_Execution_chief_officer_nj0ddf.jpg",
        name: "Shubham Wagale",
        Post: "Chief Execution Officer",
        l: "https://www.linkedin.com/in/adarsh-karande-547b0b20a",
        i: "https://www.instagram.com/dhan_shree_04/",
        m: "mailto: dgmalewar_b21@ci.vjti.ac.in",
    },
    //Chief Public Relation Officer
    {
        img:"https://res.cloudinary.com/dcir5216l/image/upload/v1726863193/Pushapak_Nagare_PR_Chief_Officer_qxxk1n.jpg",
        name: "Pushapak Nagare",
        Post: "Chief Public Relation Officer",
        l: "https://www.linkedin.com/in/adarsh-karande-547b0b20a",
        i: "https://www.instagram.com/dhan_shree_04/",
        m: "mailto: dgmalewar_b21@ci.vjti.ac.in",
    },
    {
        img: "https://res.cloudinary.com/dcir5216l/image/upload/v1726293875/Arya_Dongare_PR_Chief_officer_wesihd.jpg",
        name: "Arya Dongare",
        Post: "Chief Public Relation Officer",
        l: "https://www.linkedin.com/in/adarsh-karande-547b0b20a",
        i: "https://www.instagram.com/dhan_shree_04/",
        m: "mailto: dgmalewar_b21@ci.vjti.ac.in",
    },
    //Chief Marketing Officer
    {
        img: "https://res.cloudinary.com/dcir5216l/image/upload/v1726293834/Kshitij_Suradkar_Marketing_Chief_Officer__jxbw1p.jpg",
        name: "Kshitij Suradkar",
        Post: "Chief Marketing Officer",
        l: "https://www.linkedin.com/in/adarsh-karande-547b0b20a",
        i: "https://www.instagram.com/dhan_shree_04/",
        m: "mailto: dgmalewar_b21@ci.vjti.ac.in",
    },
    {
        img: "https://res.cloudinary.com/dcir5216l/image/upload/v1726293841/Rutuja_Mathkar_Marketing_Cheif_Officer_toz8pe.jpg",
        name: "Rutuja Mathkar",
        Post: "Chief Marketing Officer",
        l: "https://www.linkedin.com/in/adarsh-karande-547b0b20a",
        i: "https://www.instagram.com/dhan_shree_04/",
        m: "mailto: dgmalewar_b21@ci.vjti.ac.in",
    },
    //Chief Sponsorship Officer
    {
        img: "https://res.cloudinary.com/dcir5216l/image/upload/v1726293913/Sushant_Wagh__Spons_Chief_officer_w2jodk.jpg",
        name: "Sushant Wagh",
        Post: "Chief Sponsorship Officer",
        l: "https://www.linkedin.com/in/adarsh-karande-547b0b20a",
        i: "https://www.instagram.com/dhan_shree_04/",
        m: "mailto: dgmalewar_b21@ci.vjti.ac.in",
    },
    {
        img: "https://res.cloudinary.com/dcir5216l/image/upload/v1726293906/Sakshi_Mate_Sponsership_ChiefOfficer_t26giy.jpg",
        name: "Sakshi Mate",
        Post: "Chief Sponsorship Officer",
        l: "https://www.linkedin.com/in/adarsh-karande-547b0b20a",
        i: "https://www.instagram.com/dhan_shree_04/",
        m: "mailto: dgmalewar_b21@ci.vjti.ac.in",
    },
    {
        img: "https://res.cloudinary.com/dcir5216l/image/upload/v1726293892/Atharv_Baviskar__Chief_Sponsorship_Officer_cbtes8.jpg",
        name: "Atharv Baviskar",
        Post: "Chief Sponsorship Officer",
        l: "https://www.linkedin.com/in/adarsh-karande-547b0b20a",
        i: "https://www.instagram.com/dhan_shree_04/",
        m: "mailto: dgmalewar_b21@ci.vjti.ac.in",
    },
    //Chief Design Officer
    {
        img: "https://res.cloudinary.com/dcir5216l/image/upload/v1726293534/SwarKamatkar_Design_CDO_cucndx.jpg",
        name: "Swar Kamatkar",
        Post: "Chief Design Officer",
        l: "https://www.linkedin.com/in/adarsh-karande-547b0b20a",
        i: "https://www.instagram.com/dhan_shree_04/",
        m: "mailto: dgmalewar_b21@ci.vjti.ac.in",
    },
    {
        img: "https://res.cloudinary.com/dcir5216l/image/upload/v1726293529/Prerna_Tandale_Design_Chief_Officer_lxh7tc.jpg",
        name: "Prerna Tandale",
        Post: "Chief Design Officer",
        l: "https://www.linkedin.com/in/adarsh-karande-547b0b20a",
        i: "https://www.instagram.com/dhan_shree_04/",
        m: "mailto: dgmalewar_b21@ci.vjti.ac.in",
    },
    //Chief Content Officer
    {
        img: "https://res.cloudinary.com/dcir5216l/image/upload/v1726293467/Raj_Dhende_Content_Chief_wyyh04.jpg",
        name: "Raj Dhende",
        Post: "Chief Content Officer",
        l: "https://www.linkedin.com/in/adarsh-karande-547b0b20a",
        i: "https://www.instagram.com/dhan_shree_04/",
        m: "mailto: dgmalewar_b21@ci.vjti.ac.in",
    },
    {
        img: "https://res.cloudinary.com/dcir5216l/image/upload/v1726293466/Riddhi__Dapke_Content_Chief_wclxxp.jpg",
        name: "Riddhi Dapke",
        Post: "Chief Content Officer",
        l: "https://www.linkedin.com/in/adarsh-karande-547b0b20a",
        i: "https://www.instagram.com/dhan_shree_04/",
        m: "mailto: dgmalewar_b21@ci.vjti.ac.in",
    },
    
    
    //Chief Digital and Social Media Officer
    {
        img: "https://res.cloudinary.com/dcir5216l/image/upload/v1726293709/Atharva_Kate_Digital_Chief_Officer__tslbss.jpg",
        name: "Atharva Kate",
        Post: "Chief Digital&Social Media Officer",
        l: "https://www.linkedin.com/in/adarsh-karande-547b0b20a",
        i: "https://www.instagram.com/dhan_shree_04/",
        m: "mailto: dgmalewar_b21@ci.vjti.ac.in",
    },
    {
        img: "https://res.cloudinary.com/dcir5216l/image/upload/v1726293711/Vaishnavi_Sonar_digital_Chief_officer__hc04fg.jpg",
        name: "Vaishnavi Sonar",
        Post: "Chief Digital&Social Media Officer",
        l: "https://www.linkedin.com/in/adarsh-karande-547b0b20a",
        i: "https://www.instagram.com/dhan_shree_04/",
        m: "mailto: dgmalewar_b21@ci.vjti.ac.in",
    },
    //Chief Performing Art Officer
    {
        img: "https://res.cloudinary.com/dcir5216l/image/upload/v1726293867/Piyush_Kishmatrao_Chief_performing_art__bjdh1o.jpg",
        name: "Piyush Kishmatrao",
        Post: "Chief Performing Art Officer",
        l: "https://www.linkedin.com/in/adarsh-karande-547b0b20a",
        i: "https://www.instagram.com/dhan_shree_04/",
        m: "mailto: dgmalewar_b21@ci.vjti.ac.in",
    },
    {
        img: "https://res.cloudinary.com/dcir5216l/image/upload/v1726293865/AARTI_PARDESHI_CHIEF_PERFORMING_ARTS_lzj4fz.jpg",
        name: "Aarti Pardeshi",
        Post: "Chief Performing Art Officer",
        l: "https://www.linkedin.com/in/adarsh-karande-547b0b20a",
        i: "https://www.instagram.com/dhan_shree_04/",
        m: "mailto: dgmalewar_b21@ci.vjti.ac.in",
    },

];


const WebDev = [{
        img: "https://res.cloudinary.com/dcir5216l/image/upload/v1726293932/Akshay_Kulkarni_Technical_CTO_sstur5.jpg",
        name: "Akshay Kulkarni",
        Post: 'Chief Technical Officer'
    },
    {
        img: "https://res.cloudinary.com/dcir5216l/image/upload/v1726293951/Harshala_Mahajan_Technical_Chief_Officer__ay3dam.jpg",
        name: "Harshala Mahajan",
        Post: 'Chief Technical Officer'
    },
    {
        img:"https://res.cloudinary.com/dcir5216l/image/upload/v1726293957/Pushkar_Sanap_Technical_Head_zzzptb.jpg",
        name: "Pushkar Sanap",
        Post: 'Technical Head'
    },
    {
        img:"https://res.cloudinary.com/dcir5216l/image/upload/v1726869346/Ayush_M_ffvbuo.jpg",
        name: "Ayush Mhetre",
        Post: 'Technical Head'
    },
    {
        img: "https://res.cloudinary.com/dcir5216l/image/upload/v1726294326/Vedant_Ghode_Technical_Head_w0rdej.jpg",
        name: "Vedant Ghode",
        Post: 'Technical Head'
    },

]

const c = {

    teams,
    sectorHeads,
    WebDev,
    
};
export default c;