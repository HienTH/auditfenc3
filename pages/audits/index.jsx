import React from "react";
import { Button, Input, Space, Table, Tag } from "antd";
import SearchOutlined from "@ant-design/icons";
import Pagination from "@mui/material/Pagination";
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
        children: <div className="flex flex-row gap-3">
          <div className="w-5 h-5 bg-blue-100"></div>
          <p>{text}</p>

        </div>
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
const dataReport = [
  {
    key: "1",
    coin: "Deep Link",
    amount: 1,
    date: "19 Dec 2022",
    tags: ["staking", "nft", "Token", "Utility"],
  },
  {
    key: "2",
    coin: "Deep Link",
    amount: 1,
    date: "19 Dec 2022",
    tags: ["staking", "nft", "Token", "Utility"],
  },
  {
    key: "3",
    coin: "Deep Link",
    amount: 1,
    date: "19 Dec 2022",
    tags: ["staking", "nft", "Token", "Utility"],
  },
  {
    key: "4",
    coin: "Deep Link",
    amount: 1,
    date: "19 Dec 2022",
    tags: ["staking", "nft", "Token", "Utility"],
  },
];
const SearchBar = () => (
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
        />
      </div>
    </div>
  </>
);
const AuditDesktop = () => (
  <>
    <div className="flex flex-col items-center justify-center gap-3 bg-transparent">
      <p className="text-3xl font-bold text-primary">ONBOARDING AUDITS</p>
      <div className="grid justify-center grid-cols-3 gap-6">
        {data.map((x) => (
          <div className="flex flex-row items-center justify-center h-24 gap-2 p-2 text-white bg-transparent border border-blue-300 rounded-xl w-80">
            <div className="w-14 h-14 bg-slate-400 rounded-xl"></div>
            <div className="flex flex-col">
              <p>Logo</p>
              <p className="text-gray-400">Onbroarded on 9 Dec 2022</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-end text-white">
        <div className="">
          <Pagination
            sx={{ button: { color: "#ffffff" } }}
            className="text-white"
            count={4}
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
          count={4}
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
const AuditMobile = () => (
  <>
    <p className="my-5 text-3xl font-bold text-center text-primary">
      ONBOARDING AUDITS
    </p>
    <div className="flex flex-col items-center justify-center gap-4 my-5">
      {data.slice(0, 4).map((x) => (
        <div className="flex flex-row items-center justify-center h-24 gap-2 p-2 text-white bg-transparent border border-blue-300 rounded-xl w-80">
          <div className="w-14 h-14 bg-slate-400 rounded-xl"></div>
          <div className="flex flex-col">
            <p>Logo</p>
            <p className="text-gray-400">Onbroarded on 9 Dec 2022</p>
          </div>
        </div>
      ))}
    </div>
    <div className="flex justify-center my-5 text-white">
      <Pagination
        sx={{ button: { color: "#ffffff" } }}
        className="text-white"
        count={4}
      />
    </div>
    <p className="text-3xl font-bold text-center text-primary">
      AUDITS REPORTS
    </p>
    <div className="flex flex-col justify-center gap-5 m-5 text-white">
      <div className="flex items-center justify-center">
        <SearchBar />
      </div>
      <div className="flex flex-col gap-5">
        <div className="p-4 border rounded-xl border-primary">
          <div className="flex">
            <div className="mr-5 w-14 h-14 bg-slate-300 rounded-xl"></div>
            <div className="flex items-center">
              <div className="">
                <p>Logo</p>
                <p>No. of Audits:1</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-2 my-2 text-white ">
            <Tag className="text-white rounded-2xl">Staking</Tag>
            <Tag className="text-white rounded-2xl">NFT</Tag>
            <Tag className="text-white rounded-2xl">Token</Tag>
            <Tag className="text-white rounded-2xl">Utility</Tag>
          </div>
          <p>Onboarded on 9 Dec 2022</p>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="p-4 border rounded-xl border-primary">
          <div className="flex">
            <div className="mr-5 w-14 h-14 bg-slate-300 rounded-xl"></div>
            <div className="flex items-center">
              <div className="">
                <p>Logo</p>
                <p>No. of Audits:1</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-2 my-2 text-white ">
            <Tag className="text-white rounded-2xl">Staking</Tag>
            <Tag className="text-white rounded-2xl">NFT</Tag>
            <Tag className="text-white rounded-2xl">Token</Tag>
            <Tag className="text-white rounded-2xl">Utility</Tag>
          </div>
          <p>Onboarded on 9 Dec 2022</p>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="p-4 border rounded-xl border-cyan-300">
          <div className="flex">
            <div className="mr-5 w-14 h-14 bg-slate-300 rounded-xl"></div>
            <div className="flex items-center">
              <div className="">
                <p>Logo</p>
                <p>No. of Audits:1</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-2 my-2 text-white ">
            <Tag className="text-white rounded-2xl">Staking</Tag>
            <Tag className="text-white rounded-2xl">NFT</Tag>
            <Tag className="text-white rounded-2xl">Token</Tag>
            <Tag className="text-white rounded-2xl">Utility</Tag>
          </div>
          <p>Onboarded on 9 Dec 2022</p>
        </div>
      </div>
    </div>
    <div className="flex justify-center my-5 text-white">
      <Pagination
        sx={{ button: { color: "#ffffff" } }}
        className="text-white"
        count={4}
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
