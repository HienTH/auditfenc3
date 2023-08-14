import React, { useEffect, useState, useRef  } from "react";
import { Button, Input, Space, Table, Tag } from "antd";
import SearchOutlined from "@ant-design/icons";
import Pagination from "@mui/material/Pagination";
import Image from 'next/image';
import SearchBar from "../../components/SearchBar";

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
      var k = ((currentPageReport-1) * itemsPerPageReport) + 1;
      for (const i of resData) {
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
        k = k + 1;
        response.push(item);
      }
      //console.log("Report: ", response);
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
      //console.log("Onboard: ", resData);
      
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
      var k = ((currentPageReport-1) * itemsPerPageReport) + 1;
      for (const i of resData) {
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
        k = k + 1;    
        response.push(item);
      }
      //console.log("Report: ", response);
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
