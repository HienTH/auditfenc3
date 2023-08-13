import React, { useEffect, useState } from "react";
import { Button, Input, Space, Table, Tag } from "antd";
import SearchOutlined from "@ant-design/icons";
import Pagination from "@mui/material/Pagination";
import Image from 'next/image';


const data = [
  { id: 1, name: "Logo", date: "9 Dec 2022" },
  { id: 2, name: "Logo", date: "9 Dec 2022" },
  { id: 3, name: "Logo", date: "9 Dec 2022" },
  { id: 4, name: "Logo", date: "9 Dec 2022" },
  { id: 5, name: "Logo", date: "9 Dec 2022" },
  { id: 6, name: "Logo", date: "9 Dec 2022" },
  { id: 7, name: "Logo", date: "9 Dec 2022" },
  { id: 8, name: "Logo", date: "9 Dec 2022" },
  { id: 9, name: "Logo", date: "9 Dec 2022" },
  { id: 10, name: "Logo", date: "9 Dec 2022" },
  { id: 11, name: "Logo", date: "9 Dec 2022" },
  { id: 12, name: "Logo", date: "9 Dec 2022" },
  { id: 13, name: "Logo", date: "9 Dec 2022" },
  { id: 14, name: "Logo", date: "9 Dec 2022" },
  { id: 15, name: "Logo", date: "9 Dec 2022" },
];


const columns = [
  {
    title: "#",
    dataIndex: "key",
    key: "key",
    render(text, record) {
      return {
        props: {
          style: { background: "#1F3D5F", color:'white' }
        },
        children: 
     
          <p>{text}</p>

      };
    }
  },
  {
    title: "Coin",
    dataIndex: "coin",
    key: "coin",
    render(text, record) {
      return {
        props: {
          style: { background: "#1F3D5F", color:'white' }
        },
        children: <a class="StyledAnchor-sc-1rp7lwl-0 FzcRR sc-f73ebca4-0 hLbcyf" href={"/audits/" + record.slug}>
        <div className="flex flex-row gap-3">
          <div className="w-5 h-5 bg-blue-100">
          {record.coin_icon && <Image src={record.coin_icon} alt={record.name} width={300} height={200} loading="lazy"></Image> }
          </div>
          <p>{text}</p>
        </div>
        </a>
      };
    }
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render(_, {tags}) {
      return {
        props: {
          style: { background: "#1F3D5F", color:'white' }
        },
        children: 
        <>
        {tags.map((tag) => {
          return (
            <Tag className="text-white" key={tag}>
              {tag}
            </Tag>
          );
        })}
        </>

      };
    }
  },
  {
    title: "No. of Audits",
    dataIndex: "amount",
    key: "amount",
    render(text, record) {
      return {
        props: {
          style: { background: "#1F3D5F", color:'white' }
        },
        children: 
          <p>{text}</p>      
      };
    }
  },
  {
    title: "Onbroaded on",
    dataIndex: "date",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.date - b.date,
    key: "date",
    render(text, record) {
      return {
        props: {
          style: { background: "#1F3D5F", color:'white' }
        },
        children:      
          <p>{text}</p>
      };
    }
  },
];


const fetchSearchReportData = async (searchValue) => {
  try {
    const response = await fetch("https://degen.bunnydream.site/api/audit/?is_onboarding=False&page=2");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error fetching data:", error);
    return [];
  }
}

const fetchData = (value) => {

  const data = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
          "lat": "-43.9509",
          "lng": "-34.4618"
        }
      },
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
      }
    }];

  return data;

};

const SearchResultList2 = ({ items }) => (
<div aria-hidden="false">
  <div tabindex="-1" data-g-portal-id="0" class="StyledBox-sc-13pk1d4-0 kRbltQ StyledDrop-sc-16s5rx8-0 kuENZm" style="max-height: 342.333px; left: 436.667px; width: 378.767px; top: 160.667px;">
    <div role="listbox" class="StyledBox-sc-13pk1d4-0 hGpiXS TextInput__ContainerBox-sc-1ai0c08-0 hbtKgV">
      <ol class="StyledTextInput__StyledSuggestions-sc-1x30a0s-4 fWcPNR">
        <li><button role="option" aria-selected="false" type="button" class="StyledButton-sc-323bzc-0 bnqbur"><a class="StyledAnchor-sc-1rp7lwl-0 ezJrUI sc-17206447-0 cdmJwp" href="/audits/apeswap"><div class="StyledBox-sc-13pk1d4-0 iyOwjy"><div role="figure" class="StyledBox-sc-13pk1d4-0 KwPYK StyledAvatar-sc-1suyamb-1 sc-e07297e2-0 iwCGgS"><img role="presentation" src="https://firebasestorage.googleapis.com/v0/b/coinscopeassets.appspot.com/o/1677608291933_358f7d83-dac8-4329-aa68-752be954f74d?alt=media&amp;token=b64207ac-c1b2-4e0f-b42b-34a20e82f9c1" class="StyledImage-sc-ey4zx9-0 eHUole"></img></div><div class="StyledBox__StyledBoxGap-sc-13pk1d4-1 cMkquQ"></div><div class="StyledBox-sc-13pk1d4-0 gHJPDE"><span class="StyledText-sc-1sadyjn-0 kjTYXp">Apeswap</span><span class="StyledText-sc-1sadyjn-0 kmjCdl">Onboarded on 23/00/22</span></div></div></a></button></li>
        <li><button role="option" aria-selected="false" type="button" class="StyledButton-sc-323bzc-0 cdtPOb"><a class="StyledAnchor-sc-1rp7lwl-0 ezJrUI sc-17206447-0 cdmJwp" href="/audits/2-ps"><div class="StyledBox-sc-13pk1d4-0 iyOwjy"><div role="figure" class="StyledBox-sc-13pk1d4-0 KwPYK StyledAvatar-sc-1suyamb-1 sc-e07297e2-0 iwCGgS"><img role="presentation" src="https://firebasestorage.googleapis.com/v0/b/coinscopeassets.appspot.com/o/1679672135227_8ddc9638-8d99-4529-ae70-4203055fa0dc?alt=media&amp;token=84b51aee-ddab-4b7a-87c5-a3331c07fcf2" class="StyledImage-sc-ey4zx9-0 eHUole"></img></div><div class="StyledBox__StyledBoxGap-sc-13pk1d4-1 cMkquQ"></div><div class="StyledBox-sc-13pk1d4-0 gHJPDE"><span class="StyledText-sc-1sadyjn-0 kjTYXp">ProfitScraper</span><span class="StyledText-sc-1sadyjn-0 kmjCdl">Onboarded on 21/29/23</span></div></div></a></button></li>
        <li><button role="option" aria-selected="false" type="button" class="StyledButton-sc-323bzc-0 cdtPOb"><a class="StyledAnchor-sc-1rp7lwl-0 ezJrUI sc-17206447-0 cdmJwp" href="/audits/afnd"><div class="StyledBox-sc-13pk1d4-0 iyOwjy"><div role="figure" class="StyledBox-sc-13pk1d4-0 KwPYK StyledAvatar-sc-1suyamb-1 sc-e07297e2-0 iwCGgS"><img role="presentation" src="https://firebasestorage.googleapis.com/v0/b/coinscopeassets.appspot.com/o/1671459571647_e1df4a8d-d2fd-4d69-9d70-02d40eb2768a?alt=media&amp;token=6118a8c4-6cc3-47a9-a9de-5d0cfc52aea9" class="StyledImage-sc-ey4zx9-0 eHUole"></img></div><div class="StyledBox__StyledBoxGap-sc-13pk1d4-1 cMkquQ"></div><div class="StyledBox-sc-13pk1d4-0 gHJPDE"><span class="StyledText-sc-1sadyjn-0 kjTYXp">Apefund V2</span><span class="StyledText-sc-1sadyjn-0 kmjCdl">Onboarded on 19/39/22</span></div></div></a></button></li>
        <li><button role="option" aria-selected="false" type="button" class="StyledButton-sc-323bzc-0 cdtPOb"><a class="StyledAnchor-sc-1rp7lwl-0 ezJrUI sc-17206447-0 cdmJwp" href="/audits/3-apes"><div class="StyledBox-sc-13pk1d4-0 iyOwjy"><div role="figure" class="StyledBox-sc-13pk1d4-0 KwPYK StyledAvatar-sc-1suyamb-1 sc-e07297e2-0 iwCGgS"><img role="presentation" src="https://firebasestorage.googleapis.com/v0/b/coinscopeassets.appspot.com/o/1667542531523_af4d2e38-0692-4b52-8867-46eb9ba86c58?alt=media&amp;token=ba0884fc-7a45-4f40-b3ce-76bc6dfd6a27" class="StyledImage-sc-ey4zx9-0 eHUole"></img></div><div class="StyledBox__StyledBoxGap-sc-13pk1d4-1 cMkquQ"></div><div class="StyledBox-sc-13pk1d4-0 gHJPDE"><span class="StyledText-sc-1sadyjn-0 kjTYXp">APESCOIN</span><span class="StyledText-sc-1sadyjn-0 kmjCdl">Onboarded on 04/50/22</span></div></div></a></button></li>
        <li><button role="option" aria-selected="false" type="button" class="StyledButton-sc-323bzc-0 cdtPOb"><a class="StyledAnchor-sc-1rp7lwl-0 ezJrUI sc-17206447-0 cdmJwp" href="/audits/2-aped"><div class="StyledBox-sc-13pk1d4-0 iyOwjy"><div role="figure" class="StyledBox-sc-13pk1d4-0 KwPYK StyledAvatar-sc-1suyamb-1 sc-e07297e2-0 iwCGgS"><img role="presentation" src="https://firebasestorage.googleapis.com/v0/b/coinscopeassets.appspot.com/o/1665309670893_5befee82-1026-492b-a1bb-175046eafd24?alt=media&amp;token=8426b2d2-7fbb-4237-a1aa-806b5e7e2aeb" class="StyledImage-sc-ey4zx9-0 eHUole"></img></div><div class="StyledBox__StyledBoxGap-sc-13pk1d4-1 cMkquQ"></div><div class="StyledBox-sc-13pk1d4-0 gHJPDE"><span class="StyledText-sc-1sadyjn-0 kjTYXp">Apedoge</span><span class="StyledText-sc-1sadyjn-0 kmjCdl">Onboarded on 11/45/22</span></div></div></a></button></li>
        <li><button role="option" aria-selected="false" type="button" class="StyledButton-sc-323bzc-0 cdtPOb"><a class="StyledAnchor-sc-1rp7lwl-0 ezJrUI sc-17206447-0 cdmJwp" href="/audits/sape"><div class="StyledBox-sc-13pk1d4-0 iyOwjy"><div role="figure" class="StyledBox-sc-13pk1d4-0 KwPYK StyledAvatar-sc-1suyamb-1 sc-e07297e2-0 iwCGgS"><img role="presentation" src="https://firebasestorage.googleapis.com/v0/b/coinscopeassets.appspot.com/o/1658399266352_7e6683a1-a304-47c7-827b-782bc3aaaa9a?alt=media&amp;token=30e1aa4b-1b4f-42f1-9155-bfde21ecc278" class="StyledImage-sc-ey4zx9-0 eHUole"></img></div><div class="StyledBox__StyledBoxGap-sc-13pk1d4-1 cMkquQ"></div><div class="StyledBox-sc-13pk1d4-0 gHJPDE"><span class="StyledText-sc-1sadyjn-0 kjTYXp">SpinApe</span><span class="StyledText-sc-1sadyjn-0 kmjCdl">Onboarded on 21/12/22</span></div></div></a></button></li>
        <li><button role="option" aria-selected="false" type="button" class="StyledButton-sc-323bzc-0 cdtPOb"><a class="StyledAnchor-sc-1rp7lwl-0 ezJrUI sc-17206447-0 cdmJwp" href="/audits/3-bape"><div class="StyledBox-sc-13pk1d4-0 iyOwjy"><div role="figure" class="StyledBox-sc-13pk1d4-0 KwPYK StyledAvatar-sc-1suyamb-1 sc-e07297e2-0 iwCGgS"><img role="presentation" src="https://firebasestorage.googleapis.com/v0/b/coinscopeassets.appspot.com/o/1651004446598_a4f52dad-deb0-4b89-b426-e14223fa97b9?alt=media&amp;token=ce7305cb-2911-48cd-9dcd-a7aaf87e38fe" class="StyledImage-sc-ey4zx9-0 eHUole"></img></div><div class="StyledBox__StyledBoxGap-sc-13pk1d4-1 cMkquQ"></div><div class="StyledBox-sc-13pk1d4-0 gHJPDE"><span class="StyledText-sc-1sadyjn-0 kjTYXp">Baby Ape</span><span class="StyledText-sc-1sadyjn-0 kmjCdl">Onboarded on 27/40/22</span></div></div></a></button></li>
        <li><button role="option" aria-selected="false" type="button" class="StyledButton-sc-323bzc-0 cdtPOb"><a class="StyledAnchor-sc-1rp7lwl-0 ezJrUI sc-17206447-0 cdmJwp" href="/audits/mape"><div class="StyledBox-sc-13pk1d4-0 dvKZQB"><div role="figure" class="StyledBox-sc-13pk1d4-0 KwPYK StyledAvatar-sc-1suyamb-1 sc-e07297e2-0 iwCGgS"><img role="presentation" src="https://firebasestorage.googleapis.com/v0/b/coinscopeassets.appspot.com/o/1650693785452_727b25a8-78f1-493c-8ff7-7f7f43b563fe?alt=media&amp;token=e3c6e2f1-4fc7-414e-a303-ee1019b1c8b6" class="StyledImage-sc-ey4zx9-0 eHUole"></img></div><div class="StyledBox__StyledBoxGap-sc-13pk1d4-1 cMkquQ"></div><div class="StyledBox-sc-13pk1d4-0 gHJPDE"><span class="StyledText-sc-1sadyjn-0 kjTYXp">Mafia Ape</span><span class="StyledText-sc-1sadyjn-0 kmjCdl">Onboarded on 23/15/22</span></div></div></a></button></li>
      </ol>
    </div>
  </div>
</div>

);

const SearchBar = () => {
  
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState('');

  async function getAuditReport(searchValue) {

    console.log('Search value:', searchValue);
    //const data = await fetchSearchReportData(searchValue);
    //const data = await fetchData(searchValue);
    //const searchData = data['results'];
    //setSearchResult(data);
    //setSearchResult([
    //  'Search Result 1',
    //  'Search Result 2',
    //  'Search Result 3',
    //]);
    console.log("Search report: ", data);

  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      // Handle the search using the searchValue
      //console.log('Search value:', searchValue);
      getAuditReport(searchValue);
    }
  };

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
    console.log(event.target.value);
  };

  return (
  <>
    <div className="searchbar-ngoai">
      <div className="searchbar">
        <div className="searchbar_icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search Project "
          className="searchbar_input"
          value={searchValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
      </div>
      
      {/*{searchResult && searchResult.length > 0 && (
        <SearchResultList items={searchResult} />
      )}*/}

    </div>
  </>
  )
};


const fetchOnboardingData = async (currentPage) => {
  try {
    const response = await fetch("https://degen.bunnydream.site/api/audit/?is_onboarding=True&page=" + currentPage);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error fetching data:", error);
    return [];
  }
}

const fetchReportData = async (currentPageReport) => {
  try {

    const response = await fetch("https://degen.bunnydream.site/api/audit/?is_onboarding=False&page=" + currentPageReport);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error fetching data:", error);
    return [];
  }
}

const AuditDesktop = () => {
  
  const [jsonOnboardingData, setJsonOnboardingData] = useState([]);
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const [countOnboard, steCountOnboard] = useState();

  useEffect(() => {
    async function fetchData() {
      const data = await fetchOnboardingData(currentPage);
      const resData = data.results;
      console.log("Onboard: ", resData);
      
      if (resData) {
        setJsonOnboardingData(resData);
        steCountOnboard(data.count);
      }
    }
    fetchData();
  }, [currentPage]);
  
  const [dataReport, setDataReport] = useState([]);
  const [countReport, setCountReport] = useState();
  const itemsPerPageReport = 3;
  const [currentPageReport, setCurrentPageReport] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchReportData(currentPageReport);
      var resData = data.results;      
      var response = [];
      var k = 0;
      for (const i of resData) {
        k = k + 1;
        var tagList = [];
        for (const it of i.assessments) {
          tagList = tagList.concat(it.types);
        }        
        const item = { 
          "key": k, 
          "coin": i.name, 
          "tags": tagList.slice(0, 6), 
          "amount": i.assessments.length, 
          "date": i.created_at.split('T')[0],
          "slug": i.slug,
          "coin_icon": i.coin_icon
        };        
        response.push(item);
      }
      console.log("Report: ", response);
      if (response) {
        setDataReport(response);
        setCountReport(data.count);
      }
    }
    fetchData();
  }, [currentPageReport]);

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-3 bg-transparent">
        <p className="text-3xl font-bold text-primary">ONBOARDING AUDITS</p>
        <div className="grid justify-center grid-cols-3 gap-6">
          {jsonOnboardingData.map((x) => (
            <a class="StyledAnchor-sc-1rp7lwl-0 FzcRR sc-f73ebca4-0 hLbcyf" href={"/audits/" + x.slug}>
            <div className="flex flex-row items-center justify-center h-24 gap-2 p-2 text-white bg-transparent border border-blue-300 rounded-xl w-80">
              <div className="w-14 h-14 bg-slate-400 rounded-xl"> 
                 { x.coin_icon && <Image src={x.coin_icon} alt={x.name} width={300} height={200} loading="lazy"></Image> }
              </div>
              <div className="flex flex-col">
                <p>{x.name}</p>
                <p className="text-gray-400">Onbroarded on {x.created_at.split('T')[0]}</p>
              </div>
            </div>
            </a>
          ))}
        </div>
        <div className="flex justify-end text-white">
          <div className="">
            <Pagination
              sx={{ button: { color: "#ffffff" } }}
              className="text-white"
              count={Math.ceil(countOnboard / itemsPerPage)}
              page={currentPage}
              onChange={(_event, value) => setCurrentPage(value)}
            />
          </div>
        </div>
      </div>
      <div className="my-20 audit report">
        <div className="flex justify-between">
          <p className="text-3xl font-bold text-primary">AUDITS REPORTS</p>
          <div className="">
            <div className="flex my-5 text-white">
              <SearchBar />
            </div>
          </div>
        </div>
        <Table
          pagination={false}
          className="mx-10 time-table-row-select"
          columns={columns}
          dataSource={dataReport}
        />
        <div className="flex justify-center my-4">
          <Pagination
            sx={{ button: { color: "#ffffff" } }}
            className="text-white"
            count={Math.ceil(countReport / itemsPerPageReport)}
            page={currentPageReport}
            onChange={(_event, value) => setCurrentPageReport(value)}
          />
        </div>
      </div>
      <div className="my-20">
        <p className="text-3xl font-bold text-center uppercase text-primary">
          subcribe to our newsletter
        </p>
        <p className="text-center text-white">
          Stay updated with the latest hacks, threats, security best practices,
          and educational content in the crypto world right in your inbox!
        </p>
        <div className="flex flex-row justify-center gap-5 p-5 my-10">
          <div className="flex flex-row justify-center gap-5 px-10 py-5 bg-white border rounded-xl">
            <Input
              placeholder="Your email Address"
              className="px-10 py-5 text-lg border-none bg-cyan-100"
            ></Input>
            <button className="p-3 px-5 text-2xl font-bold uppercase rounded-xl bg-primary">
              Subcribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
};


const AuditMobile = () => {

  const [jsonOnboardingData, setJsonOnboardingData] = useState([]);
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const [countOnboard, steCountOnboard] = useState();

  useEffect(() => {
    async function fetchData() {
      const data = await fetchOnboardingData(currentPage);
      const resData = data.results;
      console.log("Onboard: ", resData);
      
      if (resData) {
        setJsonOnboardingData(resData);
        steCountOnboard(data.count);
      }
    }
    fetchData();
  }, [currentPage]);
  
  const [dataReport, setDataReport] = useState([]);
  const [countReport, setCountReport] = useState();
  const itemsPerPageReport = 3;
  const [currentPageReport, setCurrentPageReport] = useState(1);

  useEffect(() => {
    async function fetchData() {

      const data = await fetchReportData(currentPageReport);
      var resData = data.results;      
      var response = [];
      var k = 0;
      for (const i of resData) {
        k = k + 1;
        var tagList = [];
        for (const it of i.assessments) {
          tagList = tagList.concat(it.types);
        }        
        const item = { 
          "key": k, 
          "coin": i.name, 
          "tags": tagList, 
          "amount": i.assessments.length, 
          "date": i.created_at.split('T')[0],
          "slug": i.slug,
          "coin_icon": i.coin_icon
        };        
        response.push(item);
      }
      console.log("Report: ", response);
      if (response) {
        setDataReport(response);
        setCountReport(data.count);
      }
    }
    fetchData();
  }, [currentPageReport]);  
  
  return (
  <>
    <p className="my-5 text-3xl font-bold text-center text-primary">
      ONBOARDING AUDITS
    </p>
    <div className="flex flex-col items-center justify-center gap-4 my-5">
      {jsonOnboardingData.map((x) => (
        <a class="StyledAnchor-sc-1rp7lwl-0 FzcRR sc-f73ebca4-0 hLbcyf" href={"/audits/" + x.slug}>
        <div className="flex flex-row items-center justify-center h-24 gap-2 p-2 text-white bg-transparent border border-blue-300 rounded-xl w-80">
          <div className="w-14 h-14 bg-slate-400 rounded-xl">
          { x.coin_icon && <Image src={x.coin_icon} alt={x.name} width={300} height={200} loading="lazy"></Image> }
          </div>
          <div className="flex flex-col">
            <p>{x.name}</p>
            <p className="text-gray-400">Onbroarded on {x.created_at.split('T')[0]}</p>
          </div>
        </div>
        </a>
      ))}
    </div>
    <div className="flex justify-center my-5 text-white">
      <Pagination
        sx={{ button: { color: "#ffffff" } }}
        className="text-white"
        count={Math.ceil(countOnboard / itemsPerPage)}
        page={currentPage}
        onChange={(_event, value) => setCurrentPage(value)}
      />
    </div>
    <p className="text-3xl font-bold text-center text-primary">
      AUDITS REPORTS
    </p>
    <div className="flex flex-col justify-center gap-5 m-5 text-white">
      <div className="flex items-center justify-center">
        <SearchBar />
      </div>
      <div className="flex flex-col items-center justify-center gap-4 my-5">
      {dataReport.map((x) => (
        <div className="flex flex-col gap-5">
        <div className="p-4 border rounded-xl border-primary">
          <div className="flex">
            <a class="StyledAnchor-sc-1rp7lwl-0 FzcRR sc-f73ebca4-0 hLbcyf" href={"/audits/" + x.slug}>
              <div className="mr-5 w-14 h-14 bg-slate-300 rounded-xl">
              { x.coin_icon && <Image src={x.coin_icon} alt={x.name} width={300} height={200} loading="lazy"></Image> }
              </div>
            </a>
            <div className="flex items-center">
              <div className="">
                <p>{x.coin}</p>
                <p>No. of Audits: {x.amount}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-2 my-2 text-white ">
          {x.tags.slice(0, 3).map((y) => (
            <Tag className="text-white rounded-2xl">{y}</Tag>
          ))}
          </div>
          <p>Onboarded on {x.date}</p>
        </div>
        </div>
      ))}
      </div>
    </div>
    
    <div className="flex justify-center my-5 text-white">
      <Pagination
        sx={{ button: { color: "#ffffff" } }}
        className="text-white"
        count={Math.ceil(countReport / itemsPerPageReport)}
        page={currentPageReport}
        onChange={(_event, value) => setCurrentPageReport(value)}
      />
    </div>

    <div className="my-20">
      <p className="text-3xl font-bold text-center uppercase text-primary">
        subcribe to our newsletter
      </p>
      <p className="my-5 text-white">
        Stay updated with the latest hacks, threats, security best practices,
        and educational content in the crypto world right in your inbox!
      </p>
      <div className="flex flex-row justify-center gap-5 p-5 my-10">
        <div className="flex flex-col justify-center gap-5 px-16 py-5 bg-white border rounded-xl">
          <Input
            placeholder="Your email Address"
            className="text-center text-gray-500 border-none bg-cyan-100"
          ></Input>
          <button className="p-3 px-5 text-2xl font-bold uppercase rounded-xl bg-primary">
            Subcribe
          </button>
        </div>
      </div>
    </div>
  </>
  );
};

const Audits = () => {

  return (
    <>
      {/* Display the desktop footer on screens larger than sm (640px) */}
      <div className="hidden sm:block p-7">
        <AuditDesktop />
      </div>
      {/* Display the mobile footer on screens smaller than sm (640px) */}
      <div className="block sm:hidden px-7">
        <AuditMobile />
      </div>
    </>
  );
};

export default Audits;
