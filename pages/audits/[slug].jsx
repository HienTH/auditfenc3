import {
  CopyOutlined,
  FacebookOutlined,
  GlobalOutlined,
  RedditOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { Button, Input, Tag } from "antd";
import { Breadcrumb } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { format } from 'date-fns';
import { List } from 'antd';
import clipboardCopy from "clipboard-copy";


const Ogn = () => {
  const router = useRouter();
  const [auditData, setAuditData] = useState("");
  async function fetchAuditData(slug) {
    const apiUrl = `https://degen.bunnydream.site/api/audit/${slug}/?format=json`;
    try {
      if (auditData=="")
      {
        const response = await fetch(apiUrl);
        const auditData = await response.json();
        console.log(auditData);
        auditData.assessments&&auditData&&setAuditData(auditData);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  function formatDate(dateString) {
    const dateObject = new Date(dateString);
    return format(dateObject, 'dd/MM/yyyy');
  }
  const handleCopy = (contentToCopy) => {
    clipboardCopy(contentToCopy);
  };
  const CopyBar = () => (
    <>
    {
    <div className="flex">
      <div className="flex items-center rounded-xl copybar">
        <div className="stylebox">
          <span>Contract address</span>
        </div>
        <div className="w-[6px]"></div>
        <div className="fotcue">
        {auditData&&auditData.coin&&auditData.coin.address&&(
          <button className="buttoncoppy" onClick={() => handleCopy(auditData.coin.address)}>
            <div className="buttoncoppy_1">
              <div className="flex items-center justify-start w-4 h-4 bg-gray-500 rounded-full">
                <GlobalOutlined />
              </div>
              <div className="w-[6px]"></div>
              <span style={{ fontSize: '14px' }}>{auditData.coin.address}</span>
              <div className="w-[6px]"></div>
              <div className="">
                <CopyOutlined />
              </div>
            </div>
          </button>)}
        </div>
      </div>
    </div>
    }
    </>
  );
  const CopyBarAuditMobile = ({ title, address }) => (
    <div className="flex w-full">
      <div className="flex items-center w-full rounded-xl copybar">
        <div className="sm:w-[300px] w-[175px] stylebox">
          <span>{title}</span>
        </div>
        <div className="w-[6px]"></div>
        <div className="fotcue">
          <button className="buttoncoppy">
            <div className="buttoncoppy_1">
              <div className="w-[6px]"></div>
              <span>{address}</span>
              <div className="w-[6px]"></div>
              <div className="">
                <CopyOutlined />
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
  const TagCustom = ({ children }) => (
    <>
      <div className="tagcustom">
        <span className="font-bold tagcustomtext">{children}</span>
      </div>
    </>
  );
  const CopyBarAudit = ({ title, address }) => (
    <div className="flex w-full">
      <div className="flex items-center w-full rounded-3xl copybar">
        <div className="sm:w-[200px] w-[235px] stylebox">
          <span style={{ fontWeight: 'bold',fontSize: '12px' }}>{title}</span>
        </div>
        <div className="w-[6px]"></div>
        <div className="fotcue">
          <button className="buttoncoppy" onClick={() => handleCopy(address)}>
            <div className="buttoncoppy_1">
              <div className="w-[6px]"></div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ fontSize: '12px', width: '54px',textAlign: 'left' }}>{address.substring(0, 8) + '...'}</span>
              </div>
              <div className="w-[6px]"></div>
              <div className="flex-grow"></div>
              <div className="" style={{ display: 'flex', alignItems: 'center' }}>
                <CopyOutlined />
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
  
  const Dotbar = ({ Width }) => (
    <>
      <div className="dotbar" style={{ width: Width }}></div>
    </>
  );
  const AuditData = () => {
    function extractFileNameFromPath(path) {
      const parts = path.split('/');
      let s="";
      if (parts.length >= 3) {
        s = parts[parts.length - 2] + '/' + parts[parts.length - 1];
        
      } else {
        s = path;
      }
      return s.length > 28 ? s.substring(0, 26)+'...' : s;
    }
    const generateSeverityCountString = (findings) => {
      const severityCounts = {
        UNRESOLVED: 0,
        ACKNOWLEDGED: 0,
        SEMIRESOLVED: 0,
        RESOLVED: 0
      };
    
      findings.forEach(finding => {
        severityCounts[finding.status]++;
      });
    
      const countStrings = [];
      for (const [severity, count] of Object.entries(severityCounts)) {
        if (count > 0) {
          countStrings.push(`${count} ${severity}`);
        }
      }
      if (countStrings.length==0) return "";
      return countStrings.join(', ').toLowerCase();
    };

    const generateDotBars = (criticalCount,totalCount) => {
      const dotBars = [];
      let Width = '30px'; // Default width
      
      if (totalCount < 9) {
        Width = '30px';
      } else {
        Width = `${(9 / totalCount) * 30}px`; // Calculate width based on totalCount
      }
      if (criticalCount==0){
        dotBars.push(<Dotbar Width={0} />);
      }
      for (let i = 0; i < criticalCount; i++) {
        dotBars.push(<Dotbar key={i} Width={Width} />);
      }
      
      return dotBars;
    };
    return(
    <>
      <p className="my-2 text-xl font-bold">1 Audit</p>
      {
        auditData.assessments&&auditData.assessments[0].updated_at&&
        <p className="mb-5 text-gray-400">{"Last audit was made at "+ formatDate(auditData.assessments[0].updated_at)}</p>
      }
      <div className="tableaudit">
        <div className="tabaudit">
          <p className="text-audit">Audit</p>
        </div>
        <div className="secondtab">
          <div className="flex justify-between first-secondtab">
            <div className="flex flex-row gap-2">
              <p>Audit</p>
              {auditData.assessments&&auditData.assessments[0].types&&auditData.assessments[0].types.map((type, index) => (
                <TagCustom key={index} className="text-white rounded-2xl">
                  {type}
                </TagCustom>
              ))}
            </div>
            <div className="flex flex-row gap-2">
              <button className="buttonauditviewpdf">View PDF</button>
              <button className="text-black buttonauditviewfinding">
                View Findings
              </button>
            </div>
          </div>
          <div className="h-[48px]"></div>
          <div className="third-secondtab">
            <div className="iteration-div">
              <p className="interation-text">
                {auditData.assessments&&auditData.assessments[0].updated_at&&
                <span className="style-box">{"Iteration " +formatDate(auditData.assessments[0].updated_at)}</span>
                }
              </p>
            </div>
          </div>
          {auditData.assessments&&auditData.assessments[0].created_at&&<p className="my-3 text-gray-300">{"Onbroaded on "+ formatDate(auditData.assessments[0].created_at)}</p>}
          
          <div className="gap-3 datashow">
            <div className="datashow-1">
              <svg
                viewBox="0 0 192 192"
                width="172px"
                height="172px"
                aria-label="meter"
                className="StyledMeter-sc-nsxarx-0 iscKYz"
              >
                <circle
                  cx="96"
                  cy="96"
                  r="84"
                  stroke="#F2F2F2"
                  stroke-opacity="0.4"
                  stroke-width="24"
                  stroke-linecap="square"
                  fill="none"
                ></circle>
                <path
                  d="M 95.9853392344 12.0000012794 A 84.0000000000 84.0000000000 0 1 0 96.0000000000 12.0000000000"
                  fill="none"
                  stroke="#B8DBD9"
                  stroke-width="24"
                  stroke-linecap="butt"
                ></path>
              </svg>
            </div>
            <div className="w-[24px]"></div>
            <div className="datashow-2">
              {auditData.assessments && auditData.assessments[0].iterations &&auditData.assessments[0].iterations[0]&&auditData.assessments[0].iterations[0].findings&&(
              <div className="flex flex-col gap-3">
                <div className="flex flex-row gap-3">                 
                  <div className="flex flex-col gap-2">
                    <p className="text-xl font-bold text-center">{auditData.assessments[0].iterations[0].findings.length}</p>
                    <p className="text-center">All Findings</p>
                  </div>                 
                  <div className="flex flex-col gap-2">
                    <p className="text-xl font-bold text-center text-purple-500">
                    {auditData.assessments[0].iterations[0].findings.filter(
                      finding => finding.status === "UNRESOLVED"
                    ).length}
                    </p>
                    <p className="text-center">Unresolved</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-xl font-bold text-center text-primary">
                    {auditData.assessments[0].iterations[0].findings.filter(
                      finding => finding.status === "RESOLVED"
                    ).length}
                    </p>
                    <p className="text-center">Resolved</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-xl font-bold text-center text-cyan-600">
                    {auditData.assessments[0].iterations[0].findings.filter(
                      finding => finding.status === "ACKNOWLEDGED"
                    ).length}
                    </p>
                    <p className="text-center">Acknowledged</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-xl font-bold text-center">{auditData.assessments[0].iterations[0].findings.filter(
                      finding => finding.status === "SEMIRESOLVED"
                    ).length}</p>
                    <p className="text-center">SemiResolved</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-row items-center gap-2">
                      <p className="text-xl font-bold text-pink-600">
                      {auditData.assessments[0].iterations[0].findings.filter(
                      finding => finding.severity === "CRITICAL").length}
                      </p>
                      <p>Critical</p>
                    </div>
                    <div className="flex flex-row items-center  gap-2">
                      <p className="text-xl font-bold text-orange-500">
                      {auditData.assessments[0].iterations[0].findings.filter(
                      finding => finding.severity === "MEDIUM").length}
                      </p>
                      <p>Medium</p>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                      <p className="text-xl font-bold">
                      {auditData.assessments[0].iterations[0].findings.filter(
                      finding => finding.severity === "MINOR").length}
                      </p>
                      <p>Minor</p>
                    </div>
                  </div>
                  <div className="w-[24px]"></div>
                  <div className="flex flex-col items-start h-full gap-2">
                    <div>
                    <p>{generateSeverityCountString(auditData.assessments[0].iterations[0].findings.filter(
                      finding => finding.severity === "CRITICAL"
                    ))|| '\u00A0'}</p>
                    <div className="flex flex-row gap-2">
                    {generateDotBars(
                    auditData.assessments[0].iterations[0].findings.filter(
                      finding => finding.severity === "CRITICAL"
                    ).length,auditData.assessments[0].iterations[0].findings.length)}
                    </div>
                    </div>
                    <div>
                    <p>{generateSeverityCountString(auditData.assessments[0].iterations[0].findings.filter(
                      finding => finding.severity === "MEDIUM"
                    ))|| '\u00A0'}</p>
                    <div className="flex flex-row gap-2">
                    {generateDotBars(
                    auditData.assessments[0].iterations[0].findings.filter(
                      finding => finding.severity === "MEDIUM"
                    ).length,auditData.assessments[0].iterations[0].findings.length)}
                    </div>
                    </div>
                    <div>
                    <p>{generateSeverityCountString(auditData.assessments[0].iterations[0].findings.filter(
                      finding => finding.severity === "MINOR"
                    ))|| '\u00A0'}</p>
                    <div className="flex flex-row gap-2">
                    {generateDotBars(
                    auditData.assessments[0].iterations[0].findings.filter(
                      finding => finding.severity === "MINOR"
                    ).length,
                    auditData.assessments[0].iterations[0].findings.length)}
                    </div>
                    </div>
                  </div>
                </div>
              </div>
              )}
            </div>
            <div className="w-[25px]"></div>
            <div className="flex flex-col gap-2 datashow-4">
              <div className="flex justify-between">
                <p>Files</p>
                <p>SHA256</p>
              </div>
              {auditData&&auditData.assessments&&auditData.assessments[0]&&auditData.assessments[0].iterations&&
              auditData.assessments[0].iterations[0]&&auditData.assessments[0].iterations[0].files&&
              <div className="flex flex-col gap-2">
                  <List
                  style={{ maxHeight: '250px', overflow: 'auto' }}
                  dataSource={auditData.assessments[0].iterations[0].files}
                  renderItem={(file) => (
                    <div style={{marginBottom: '5px'}}>
                    <CopyBarAudit title={extractFileNameFromPath(file.path)} address={file.sha256} />
                    </div>
                  )}
                />
              </div>
              }
            </div>
          </div>
        </div>
      </div>
    </>);
  };

  const AuditDataMobile = () => {
    function extractFileNameFromPath(path) {
      const parts = path.split('/');
      let s="";
      if (parts.length >= 3) {
        s = parts[parts.length - 2] + '/' + parts[parts.length - 1];
        
      } else {
        s = path;
      }
      return s.length > 28 ? s.substring(0, 26)+'...' : s;
    }
    const generateSeverityCountString = (findings) => {
      const severityCounts = {
        UNRESOLVED: 0,
        ACKNOWLEDGED: 0,
        SEMIRESOLVED: 0,
        RESOLVED: 0
      };
    
      findings.forEach(finding => {
        severityCounts[finding.status]++;
      });
    
      const countStrings = [];
      for (const [severity, count] of Object.entries(severityCounts)) {
        if (count > 0) {
          countStrings.push(`${count} ${severity}`);
        }
      }
      if (countStrings.length==0) return "";
      return countStrings.join(', ').toLowerCase();
    };

    const generateDotBars = (criticalCount,totalCount) => {
      const dotBars = [];
      let Width = '30px'; // Default width
      
      if (totalCount < 9) {
        Width = '30px';
      } else {
        Width = `${(9 / totalCount) * 30}px`; // Calculate width based on totalCount
      }
      if (criticalCount==0){
        dotBars.push(<Dotbar Width={0} />);
      }
      for (let i = 0; i < criticalCount; i++) {
        dotBars.push(<Dotbar key={i} Width={Width} />);
      }
      
      return dotBars;
    };
    return(
    <>
      <p className="my-2 text-xl font-bold">1 Audit</p>
      { 	auditData.assessments&&auditData.assessments[0].updated_at&&
        <p className="mb-5 text-gray-400">{"Last audit was made at "+ formatDate(auditData.assessments[0].updated_at)}</p>
      }
      <div className="border rounded-lg border-primary bg-[#040524] p-3 my-5">
        <div className="flex flex-row gap-2">
          <p>AUDIT</p>
          <div className="flex">
          {auditData.assessments&&auditData.assessments[0].types&&auditData.assessments[0].types.map((type, index) => (
                <TagCustom key={index} className="text-white rounded-2xl">
                  {type}
                </TagCustom>
              ))}
          </div>
        </div>
        <div className="flex flex-col my-2">
          <div className="third-secondtab">
            <div className="iteration-div">
              <p className="interation-text">
                {auditData.assessments&&auditData.assessments[0].updated_at&&
                <span className="style-box">{"Iteration " +formatDate(auditData.assessments[0].updated_at)}</span>
                }
              </p>
            </div>
          </div>
              {auditData.assessments&&auditData.assessments[0].created_at&&<p className="my-3 text-gray-300">{"Onbroaded on "+ formatDate(auditData.assessments[0].created_at)}</p>}
        </div>
        <div className="flex flex-row">
          <button className="buttonauditviewpdf">View PDF</button>
          <button className="text-black buttonauditviewfinding">
            View Findings
          </button>
        </div>
        {auditData.assessments && auditData.assessments[0].iterations &&auditData.assessments[0].iterations[0]&&auditData.assessments[0].iterations[0].findings&&(
        <div>
        <div className="flex flex-col justify-center gap-3">
          <div className="my-5 datashow-1">
            <svg
              viewBox="0 0 192 192"
              width="172px"
              height="172px"
              aria-label="meter"
              className="StyledMeter-sc-nsxarx-0 iscKYz"
            >
              <circle
                cx="96"
                cy="96"
                r="84"
                stroke="#F2F2F2"
                stroke-opacity="0.4"
                stroke-width="24"
                stroke-linecap="square"
                fill="none"
              ></circle>
              <path
                d="M 95.9853392344 12.0000012794 A 84.0000000000 84.0000000000 0 1 0 96.0000000000 12.0000000000"
                fill="none"
                stroke="#B8DBD9"
                stroke-width="24"
                stroke-linecap="butt"
              ></path>
            </svg>
          </div>
          <div className="flex flex-row justify-center gap-4">
            <div className="flex flex-col gap-2">
              <p className="text-3xl font-bold text-center">{auditData.assessments[0].iterations[0].findings.length}</p>
              <p className="text-center">All Findings</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-3xl font-bold text-center text-purple-500">{auditData.assessments[0].iterations[0].findings.filter(
              finding => finding.status === "UNRESOLVED"
              ).length}</p>
              <p className="text-center">Unresolved</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-3xl font-bold text-center text-primary">{auditData.assessments[0].iterations[0].findings.filter(
              finding => finding.status === "RESOLVED"
                    ).length}</p>
              <p className="text-center">Resolved</p>
            </div>
          </div>
          <div className="flex flex-row justify-center gap-4">
            <div className="flex flex-col gap-2">
              <p className="text-3xl font-bold text-center text-cyan-600">{auditData.assessments[0].iterations[0].findings.filter(
                finding => finding.status === "ACKNOWLEDGED"
              ).length}</p>
              <p className="text-center">Acknowledged</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-3xl font-bold text-center">
              {auditData.assessments[0].iterations[0].findings.filter(
              finding => finding.status === "SEMIRESOLVED"
                    ).length}
              </p>
              <p className="text-center">SemiResolved</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-end h-full gap-2">
            <div className="flex flex-row gap-2">
              <Dotbar />
              <Dotbar />
              <Dotbar />
              <Dotbar />
              <Dotbar />
              <Dotbar />
              <Dotbar />
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center gap-4">
          <div className="flex flex-row items-center gap-2">
                        <p className="text-xl font-bold text-pink-600">
                        {auditData.assessments[0].iterations[0].findings.filter(
                        finding => finding.severity === "CRITICAL").length}
                        </p>
                        <p>Critical</p>
          </div>
          <div className="flex flex-row items-center  gap-2">
                        <p className="text-xl font-bold text-orange-500">
                        {auditData.assessments[0].iterations[0].findings.filter(
                        finding => finding.severity === "MEDIUM").length}
                        </p>
                        <p>Medium</p>
          </div>
          <div className="flex flex-row items-center gap-2">
                        <p className="text-xl font-bold">
                        {auditData.assessments[0].iterations[0].findings.filter(
                        finding => finding.severity === "MINOR").length}
                        </p>
                        <p>Minor</p>
          </div>
        </div>
        </div>)}
        <div className="flex flex-col justify-center gap-2 datashow-4">
        <div className="flex justify-between">
          <p>Files</p>
          <p>SHA256</p>
        </div>
        {auditData&&auditData.assessments&&auditData.assessments[0]&&auditData.assessments[0].iterations&&
              auditData.assessments[0].iterations[0]&&auditData.assessments[0].iterations[0].files&&
              <div className="flex flex-col gap-2">
                  <List
                  style={{ maxHeight: '250px', overflow: 'auto' }}
                  dataSource={auditData.assessments[0].iterations[0].files}
                  renderItem={(file) => (
                    <div style={{marginBottom: '5px'}}>
                    <CopyBarAudit title={extractFileNameFromPath(file.path)} address={file.sha256} />
                    </div>
                  )}
                />
              </div>
              }
        </div>
      </div>
    </>
    );
  };
  
  const OgnDesktop = () =>{
    useEffect(() => {
      if (!auditData)
      {        
        const slug = router.query.slug;
        fetchAuditData(slug);
      }
    }, [router.query.slug]);
    if (!auditData) {
      return <div><p>Loading...</p></div>;
    }
  
    return (
      <>
      <div className="mx-20 text-white">
      <Breadcrumb
        className="my-5"
        items={[
          {
            title: (
              <Link className="text-white" href="#">
                Home
              </Link>
            ),
          },
          {
            title: (
              <Link className="text-white" href="#">
                Audit
              </Link>
            ),
          },
          {
            title: "Logo",
          },
        ]}
      />
      <div className="flex flex-row gap-3">
        <div className="flex flex-col w-1/2 gap-3">
          <div className="flex">
            <div className="w-20 h-20 bg-slate-200 rounded-full flex items-center justify-center" style={{ background: 'transparent' }}>
              {auditData.coin && auditData.coin.icon && 
              <Image src={auditData.coin.icon} alt={auditData.name} loading="lazy" width={300} height={200}></Image> }
            </div>
            <div className="flex items-center justify-center">
              <p className="mx-4 text-2xl font-bold">{auditData.name}</p>
            </div>
          </div>
          <div className="flex">
              {auditData.assessments&&auditData.assessments[0].types&&auditData.assessments[0].types.map((type, index) => (
                    <TagCustom key={index} className="text-white rounded-2xl">
                      {type}
                    </TagCustom>
              ))}
          </div>
          <CopyBar />
          <Socialbar />
        </div>
        <div className="w-1/2">
          <TextOrigin />
        </div>
      </div>
      <AuditData />
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
  }
  
  const TextOrigin = () => {
    const [showFull, setShowFull] = useState(false);
  
    const toggleShowFull = () => {
      setShowFull(prevShowFull => !prevShowFull);
    };
  
    return (
      <>
      {showFull
        ? auditData.coin.description
        : auditData.coin.description.length > 500
        ? auditData.coin.description.slice(0, 500) + '...'
        : auditData.coin.description}
      {auditData.coin.description.length > 500 && (
        <button class="text-primary" onClick={toggleShowFull}>
          {showFull ? 'Show Less' : 'Show More'}
        </button>
      )}
      </>
    );
  };
  const Socialbar = () => (
    <div className="flex flex-row gap-3 social">
      {auditData.coin && auditData.coin.website && 
      <div className="flex items-center justify-center w-10 h-10 bg-[#e5e7eb] rounded-full">
        <a href={auditData.coin.website} target="_blank" rel="noopener noreferrer">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="20" cy="20" r="20" fill="#D9D9D9" />
          <path
            d="M20.7456 29.2308H19.2328C18.9013 29.183 18.5643 29.1581 18.2405 29.0842C14.5793 28.256 12.1926 26.0486 11.0803 22.462C10.9094 21.9112 10.8399 21.3379 10.7695 20.7669V19.2544C10.7885 19.1191 10.8092 18.9838 10.8259 18.8453C11.0063 17.3698 11.5075 16.0103 12.3636 14.7978C14.0334 12.432 16.3095 11.0819 19.2044 10.8104C20.5416 10.6813 21.8907 10.8571 23.1502 11.3246C27.3902 12.8862 29.9094 17.1962 29.0686 21.6307C28.3659 25.3389 26.1133 27.7413 22.5282 28.8965C21.9491 29.0833 21.3469 29.1581 20.7456 29.2308ZM17.6897 19.4556C18.2057 19.4556 18.7217 19.4556 19.2382 19.4556C19.3555 19.4556 19.4358 19.4362 19.4353 19.2914C19.4323 18.499 19.4323 17.7068 19.4353 16.9147C19.4353 16.792 19.3839 16.7451 19.2626 16.7428C18.3685 16.7265 17.4759 16.6646 16.5882 16.5575C16.3902 16.5331 16.3302 16.5967 16.2919 16.7758C16.1252 17.5917 16.0176 18.4185 15.9698 19.2499C15.9599 19.3952 16.005 19.4579 16.1593 19.456C16.6694 19.4515 17.1796 19.4551 17.6897 19.4556ZM22.2747 19.4556C22.7844 19.4556 23.2946 19.4497 23.8047 19.4583C23.9797 19.4615 24.028 19.3893 24.0073 19.2328C23.9919 19.1137 23.9843 18.9937 23.977 18.8719C23.93 18.1481 23.8274 17.4289 23.6703 16.7207C23.6433 16.594 23.5801 16.5561 23.4556 16.5705C22.5574 16.6785 21.6539 16.7358 20.7493 16.7424C20.5891 16.7424 20.5427 16.8037 20.544 16.9562C20.5491 17.7182 20.5491 18.4802 20.544 19.2422C20.544 19.4105 20.6031 19.4606 20.7655 19.4579C21.2666 19.4506 21.7705 19.4556 22.2747 19.4556ZM13.3618 19.4556C13.7753 19.4556 14.1889 19.4556 14.6026 19.4556C14.8192 19.4556 14.853 19.4285 14.8588 19.2089C14.8889 18.3343 14.9979 17.4643 15.1845 16.6093C15.2359 16.3676 15.2323 16.363 14.9874 16.3202C14.3965 16.2201 13.8128 16.0813 13.24 15.9048C13.0681 15.8506 12.9874 15.8903 12.9021 16.0441C12.3523 17.0387 12.0128 18.1357 11.9049 19.267C11.89 19.4141 11.9454 19.4592 12.0853 19.4574C12.5102 19.4533 12.9346 19.4565 13.3618 19.4565V19.4556ZM22.2761 20.5657C21.7781 20.5657 21.28 20.5657 20.7817 20.5657C20.5526 20.5657 20.5449 20.5729 20.5445 20.7953C20.5445 21.5215 20.5494 22.2477 20.5409 22.974C20.5409 23.1544 20.599 23.2266 20.7759 23.2225C20.9013 23.2193 21.0271 23.2351 21.153 23.2383C21.885 23.255 22.613 23.3199 23.3406 23.3975C23.6288 23.4286 23.6243 23.4363 23.6861 23.1593C23.8643 22.3623 23.9504 21.5504 24.0068 20.7384C24.0167 20.595 23.9477 20.5643 23.8264 20.5652C23.309 20.5675 22.7921 20.5661 22.2761 20.5657ZM26.6063 20.5657C26.1863 20.5657 25.7669 20.5711 25.3474 20.563C25.1841 20.5603 25.1196 20.6252 25.1155 20.7826C25.0874 21.6634 24.975 22.5395 24.7799 23.3989C24.7434 23.5658 24.8047 23.6118 24.9482 23.6366C25.5685 23.7397 26.1812 23.8844 26.7822 24.0696C26.9419 24.1201 27.0181 24.0764 27.0952 23.9343C27.6354 22.9483 27.9682 21.8623 28.0731 20.743C28.0871 20.6076 28.0307 20.5625 27.9004 20.5625C27.471 20.5684 27.0393 20.5661 26.6076 20.5657H26.6063ZM17.7005 20.5657C17.185 20.5657 16.6694 20.5657 16.1538 20.5657C16.0321 20.5657 15.9603 20.5927 15.9703 20.7375C16.0275 21.5684 16.1173 22.3948 16.2986 23.2099C16.3302 23.3515 16.3789 23.4097 16.5368 23.3903C17.4416 23.2838 18.3514 23.246 19.2608 23.213C19.411 23.2076 19.4358 23.13 19.4349 23.0042C19.4322 22.2608 19.4303 21.5156 19.4349 20.7741C19.4349 20.6189 19.3857 20.5616 19.2278 20.5639C18.7208 20.5702 18.212 20.5657 17.7019 20.5657H17.7005ZM26.6018 19.4551C27.0339 19.4551 27.4655 19.4524 27.8977 19.4551C28.0411 19.4551 28.0943 19.4024 28.0713 19.2598C28.0452 19.0943 28.0316 18.9269 28.0064 18.7609C27.8617 17.804 27.5439 16.8814 27.0686 16.0383C27.019 15.9481 26.9658 15.903 26.8535 15.9359C26.2139 16.1196 25.5641 16.266 24.9076 16.3743C24.7899 16.3946 24.7592 16.4411 24.7835 16.5548C24.9698 17.4416 25.0993 18.336 25.12 19.244C25.1232 19.4028 25.2003 19.4592 25.3604 19.4556C25.775 19.4493 26.189 19.4556 26.6018 19.4551ZM13.3627 20.5648C12.9364 20.5648 12.5102 20.5679 12.0844 20.5648C11.945 20.5648 11.89 20.6099 11.9039 20.7556C12.0086 21.8577 12.3339 22.9276 12.8606 23.9014C12.9351 24.0367 13.0095 24.0732 13.1583 24.0277C13.7675 23.8455 14.3884 23.7052 15.0167 23.6077C15.1836 23.5806 15.2238 23.5202 15.1886 23.3587C14.9979 22.5101 14.888 21.6453 14.8602 20.7759C14.8561 20.6288 14.7975 20.5612 14.6401 20.5639C14.2147 20.5697 13.7885 20.5648 13.3627 20.5648ZM20.5436 13.7802C20.5436 14.326 20.5467 14.8714 20.5413 15.4171C20.5413 15.5665 20.5972 15.6201 20.7438 15.6138C21.2053 15.594 21.6667 15.5881 22.1272 15.5633C22.4619 15.5448 22.7953 15.5029 23.129 15.4731C23.254 15.4627 23.3 15.4185 23.2513 15.2886C22.9509 14.487 22.5824 13.7229 22.0334 13.0567C21.687 12.6349 21.2883 12.2763 20.7772 12.0643C20.5607 11.9741 20.5418 11.9877 20.5413 12.2163C20.5425 12.7372 20.5433 13.2585 20.5436 13.7802ZM19.434 26.1653C19.434 25.6435 19.434 25.1215 19.434 24.5992C19.434 24.3452 19.434 24.3389 19.1859 24.3466C18.401 24.37 17.6175 24.4156 16.8349 24.4882C16.6996 24.5004 16.6884 24.5617 16.728 24.6686C17.0731 25.5915 17.5075 26.463 18.1958 27.1847C18.4735 27.4855 18.8105 27.7257 19.1854 27.8902C19.411 27.9854 19.4335 27.9682 19.434 27.7323C19.4346 27.2097 19.4346 26.6873 19.434 26.1653ZM19.434 13.8019C19.434 13.2678 19.434 12.7337 19.434 12.1997C19.434 11.989 19.4168 11.9777 19.2165 12.0571C18.9488 12.1654 18.7012 12.3179 18.484 12.5082C17.6157 13.2579 17.125 14.2466 16.7271 15.294C16.6856 15.4036 16.7271 15.4492 16.8386 15.4586C17.627 15.5286 18.415 15.594 19.2071 15.6116C19.3803 15.6152 19.4398 15.561 19.4371 15.386C19.4299 14.8583 19.434 14.3301 19.434 13.8019ZM20.5445 26.1513C20.5445 26.6926 20.5445 27.2307 20.5445 27.7702C20.5445 27.9533 20.5742 27.9745 20.7452 27.9055C21.1484 27.7467 21.4867 27.491 21.7826 27.1797C22.4529 26.477 22.885 25.6326 23.2224 24.7336C23.2959 24.5378 23.295 24.5288 23.0785 24.5035C22.2986 24.4133 21.5143 24.3827 20.7308 24.3425C20.5891 24.3353 20.5404 24.393 20.5418 24.5315C20.5472 25.0732 20.5445 25.6127 20.5445 26.1513ZM17.0136 27.5587C16.8521 27.3254 16.7181 27.1419 16.5945 26.9511C16.1683 26.2943 15.8516 25.5843 15.5972 24.8455C15.5593 24.7354 15.5242 24.6515 15.3717 24.6799C14.8602 24.7764 14.3482 24.8712 13.8435 25.0015C13.6491 25.0516 13.6423 25.0701 13.7749 25.2271C14.3529 25.9177 15.042 26.5072 15.8137 26.9714C16.1951 27.2033 16.5967 27.4002 17.0136 27.5596V27.5587ZM22.9712 27.5347C22.9954 27.5349 23.0195 27.5328 23.0433 27.5284C24.2986 27.0223 25.3514 26.2384 26.222 25.205C26.3122 25.0976 26.245 25.0818 26.1566 25.0575C25.6604 24.9194 25.1539 24.8197 24.6478 24.7192C24.4917 24.6885 24.4159 24.73 24.3672 24.8797C24.2237 25.3129 24.0488 25.735 23.844 26.1427C23.5997 26.6347 23.3074 27.1013 22.9712 27.5356V27.5347ZM23.0614 12.5416C23.0808 12.5713 23.0984 12.602 23.1191 12.6318C23.6775 13.386 24.0803 14.2214 24.3771 15.1082C24.4308 15.2692 24.5048 15.3093 24.6622 15.2791C25.1507 15.1844 25.6392 15.0937 26.1223 14.9719C26.2793 14.9322 26.2946 14.8962 26.1881 14.7726C25.5542 14.0248 24.7917 13.3965 23.9364 12.9173C23.6604 12.7635 23.3785 12.6214 23.0632 12.5425L23.0614 12.5416ZM16.904 12.5168C16.8815 12.519 16.8592 12.5236 16.8377 12.5303C15.6615 13.0257 14.6192 13.7921 13.7957 14.7672C13.7055 14.8709 13.7695 14.893 13.8566 14.9156C14.3433 15.0432 14.8354 15.1461 15.3289 15.2448C15.4899 15.2769 15.5607 15.2331 15.6135 15.0752C15.8979 14.2019 16.3169 13.3782 16.8552 12.634C16.8782 12.6025 16.9157 12.574 16.904 12.5168Z"
            fill="#040524"
          />
        </svg>
        </a>
      </div>
      }
      {auditData.coin && auditData.coin.twitter && 
      <div className="flex items-center justify-center w-10 h-10 bg-gray-500 rounded-full">
        <a href={auditData.coin.twitter} target="_blank" rel="noopener noreferrer">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="20" cy="20" r="20" fill="#D9D9D9" />
          <path
            d="M29.7044 14.198C29.2908 14.843 28.7654 15.4098 28.1527 15.8721C27.9068 16.0575 27.8239 16.2429 27.8267 16.5525C27.8332 18.8503 27.1747 20.9554 25.9066 22.8737C24.8126 24.5278 23.3726 25.7963 21.5754 26.6491C20.5449 27.1335 19.4433 27.4512 18.3122 27.59C17.4896 27.6986 16.6577 27.7208 15.8304 27.6562C14.5017 27.5532 13.2033 27.2085 11.9995 26.6394C11.5729 26.4432 11.1617 26.2153 10.7695 25.9576C12.8978 26.1532 14.783 25.6388 16.4978 24.3591C16.3017 24.335 16.1462 24.3225 15.9939 24.2956C14.5274 24.0365 13.5256 23.2032 12.9444 21.8494C12.8643 21.664 12.8881 21.6455 13.0958 21.6733C13.5984 21.7407 14.1095 21.7092 14.6 21.5806C13.6621 21.3489 12.9234 20.8993 12.3562 20.186C11.789 19.4728 11.51 18.6673 11.5095 17.7297C12.0526 17.9948 12.5998 18.1839 13.248 18.1931C12.8755 17.9206 12.5709 17.6439 12.3245 17.3125C11.8784 16.7229 11.6113 16.0185 11.5547 15.2826C11.4956 14.5378 11.6479 13.8416 11.9808 13.177C12.0437 13.0514 12.0782 13.0167 12.1876 13.1455C13.8176 15.0656 15.87 16.2934 18.3308 16.8454C18.8678 16.9659 19.4155 17.0243 19.9641 17.0711C20.081 17.0813 20.1038 17.0586 20.0866 16.932C19.8653 15.4879 20.2528 14.2402 21.3645 13.2655C22.2642 12.4776 23.3307 12.1787 24.5206 12.3581C25.336 12.4762 26.0898 12.8576 26.6661 13.4435C26.6941 13.4751 26.7308 13.4977 26.7717 13.5086C26.8125 13.5195 26.8557 13.5181 26.8957 13.5047C27.6398 13.3426 28.3569 13.0759 29.0254 12.7126C29.0781 12.6839 29.1265 12.6408 29.2178 12.6431C28.9323 13.5204 28.3734 14.1758 27.6325 14.699C28.033 14.6791 28.4135 14.5878 28.7893 14.4761C29.0906 14.3867 29.3864 14.2787 29.6849 14.1786L29.7044 14.198Z"
            fill="#040524"
          />
        </svg>
        </a>
      </div>
      }
      {auditData.coin && auditData.coin.telegram && 
      <div className="flex items-center justify-center w-10 h-10 bg-[#e5e7eb] rounded-full">
        <a href={auditData.coin.telegram} target="_blank" rel="noopener noreferrer">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="20" cy="20" r="20" fill="#D9D9D9" />
          <path
            d="M28.5205 12.9367C28.4061 13.3086 28.3556 13.6898 28.2801 14.0683C27.9701 15.6155 27.667 17.1641 27.3608 18.7122C26.9623 20.7309 26.5634 22.7493 26.164 24.7677C26.0217 25.4878 25.886 26.2089 25.7377 26.9281C25.5987 27.6124 24.7156 27.9267 24.1512 27.4939C22.473 26.2061 20.7952 24.9174 19.1179 23.6277C18.7009 23.3074 18.2839 22.9852 17.8637 22.67C17.758 22.5905 17.7492 22.5477 17.8563 22.4524C18.8429 21.5691 19.8262 20.6821 20.8063 19.7913C22.3854 18.3656 23.9645 16.9399 25.5436 15.5141C25.6719 15.3984 25.8114 15.29 25.8864 15.1269C25.9615 14.9637 25.8999 14.8795 25.7275 14.88C25.5445 14.88 25.3971 14.9762 25.2516 15.0688C24.3444 15.6459 23.4383 16.2234 22.5332 16.8015C20.1748 18.305 17.817 19.8091 15.4598 21.3139C15.4133 21.347 15.3591 21.3678 15.3024 21.3743C15.2457 21.3808 15.1883 21.3728 15.1355 21.3511C13.9262 20.9368 12.7127 20.5286 11.4997 20.1186C11.2485 20.033 11.0271 19.9015 10.876 19.6746C10.7134 19.4296 10.737 19.2097 10.9413 18.9996C11.0854 18.8494 11.2657 18.7587 11.4543 18.6843C15.5984 17.051 19.7431 15.4187 23.8885 13.7875C25.0104 13.3458 26.1325 12.9041 27.2547 12.4625C27.4616 12.3725 27.6828 12.3203 27.908 12.3081C28.2657 12.3012 28.3838 12.3751 28.5205 12.6926V12.9367Z"
            fill="#040524"
          />
        </svg>
        </a>
      </div>
      }
      {auditData.coin && auditData.coin.facebook && 
      <div className="flex items-center justify-center w-10 h-10 bg-[#e5e7eb] rounded-full">
        <a href={auditData.coin.facebook} target="_blank" rel="noopener noreferrer">
        <svg
          width="12"
          height="20"
          viewBox="0 0 12 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_263_1673)">
            <path
              d="M8.00386 15.0906C8.00386 16.3657 7.99479 17.6409 8.01099 18.9161C8.01099 19.1798 7.92286 19.2354 7.64549 19.232C6.58788 19.2175 5.53027 19.2152 4.47007 19.232C4.16354 19.2372 4.07346 19.174 4.07476 18.8877C4.08837 16.3489 4.07865 13.8096 4.08901 11.2709C4.08901 11.0123 4.02421 10.9231 3.72092 10.9318C2.85773 10.9515 1.99388 10.9318 1.12874 10.9434C0.903219 10.9445 0.846191 10.879 0.846191 10.6808C0.85656 9.75341 0.85656 8.82601 0.846191 7.89862C0.846191 7.69343 0.910996 7.63895 1.13652 7.64185C2.03212 7.65286 2.92772 7.64185 3.82332 7.65054C4.03328 7.65054 4.09938 7.60127 4.09679 7.40942C4.08707 6.61765 4.09679 5.82589 4.09679 5.03297C4.09502 4.30764 4.27529 3.5912 4.6243 2.93648C5.34882 1.56799 6.62612 0.965761 8.25336 0.806365C9.32264 0.699714 10.3595 0.842301 11.4042 0.984888C11.5694 1.00749 11.6174 1.06835 11.6161 1.20978C11.6109 1.99169 11.6089 2.77476 11.6161 3.55609C11.6161 3.72186 11.5584 3.76707 11.3769 3.76823C10.8378 3.77171 10.2979 3.78678 9.75683 3.80939C8.99148 3.84126 8.43741 4.22034 8.18856 4.86951C8.0259 5.29554 8.00516 5.73895 7.99414 6.18352C7.98572 6.57882 8.01423 6.97586 7.99414 7.37058C7.98118 7.61055 8.08228 7.65518 8.32529 7.65228C9.27533 7.64069 10.2254 7.65228 11.1767 7.643C11.4223 7.643 11.4839 7.68648 11.445 7.91717C11.2916 8.8322 11.1555 9.74954 11.0367 10.6692C11.0069 10.8982 10.911 10.9509 10.6719 10.9474C9.88449 10.9353 9.09647 10.9509 8.30844 10.9376C8.06931 10.9335 7.99609 10.9892 7.99803 11.21C8.00969 12.5031 8.00386 13.7969 8.00386 15.0906Z"
              fill="#040524"
            />
          </g>
          <defs>
            <clipPath id="clip0_263_1673">
              <rect
                width="10.7692"
                height="18.4615"
                fill="white"
                transform="translate(0.846191 0.769234)"
              />
            </clipPath>
          </defs>
        </svg>
        </a>
      </div>
      }
      {auditData.coin && auditData.coin.reddit&&
      <div className="flex items-center justify-center w-10 h-10 bg-gray-500 rounded-full">
        <a href={auditData.coin.reddit} target="_blank" rel="noopener noreferrer">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="20" cy="20" r="20" fill="#D9D9D9" />
          <path
            d="M19.8043 29.2327C17.3707 29.1828 15.2072 28.6938 13.291 27.3871C12.0112 26.5115 11.0453 25.3934 10.6829 23.8402C10.5758 23.3801 10.5556 22.9086 10.5529 22.4392C10.5586 22.3695 10.5439 22.2997 10.5105 22.2384C10.4771 22.177 10.4266 22.1267 10.365 22.0936C9.46784 21.5211 9.07381 20.6118 9.28733 19.6372C9.49882 18.6767 10.27 17.9741 11.2932 17.8435C11.8852 17.768 12.4254 17.9452 12.901 18.3001C13.0357 18.4018 13.132 18.4093 13.2775 18.317C14.9951 17.2312 16.8588 16.6035 18.9017 16.5563C19.0903 16.5523 19.1374 16.4593 19.1711 16.299C19.5173 14.6376 19.8669 12.9788 20.2198 11.3228C20.3195 10.8513 20.5196 10.7166 20.9897 10.8095C22.1186 11.0271 23.2475 11.2453 24.3737 11.477C24.5596 11.5154 24.6606 11.4716 24.7778 11.3315C24.986 11.081 25.2675 10.902 25.5827 10.8198C25.8979 10.7375 26.231 10.756 26.5351 10.8728C26.8286 10.9926 27.0808 11.1953 27.2611 11.456C27.4413 11.7167 27.5418 12.0243 27.5502 12.3412C27.5576 13.0949 26.9958 13.7556 26.2253 13.8971C25.5066 14.0318 24.7495 13.6216 24.5212 12.913C24.4181 12.5924 24.2477 12.4934 23.9453 12.4415C23.0858 12.288 22.2324 12.1048 21.3784 11.9256C21.2039 11.8885 21.1157 11.9148 21.0773 12.1041C20.7814 13.5504 20.4801 14.9954 20.1734 16.4391C20.1404 16.5954 20.1835 16.6519 20.3431 16.6587C22.3272 16.7268 24.2539 17.3417 25.9107 18.4355C26.0737 18.5419 26.1633 18.4699 26.2859 18.385C27.0585 17.8462 27.8789 17.7647 28.7107 18.2146C29.5426 18.6645 29.9635 19.396 29.9272 20.3457C29.8995 21.0658 29.5742 21.6497 28.9788 22.0694C28.867 22.1475 28.7632 22.2108 28.768 22.3792C28.84 24.7023 27.6849 26.3303 25.8164 27.5427C24.3562 28.4857 22.7336 28.9727 21.0113 29.1431C20.5607 29.1869 20.108 29.2098 19.8043 29.2327ZM24.6263 21.8323C24.6263 20.9445 23.983 20.2979 23.1101 20.302C22.2513 20.3067 21.604 20.9641 21.6107 21.8276C21.6168 22.6533 22.2297 23.339 23.2946 23.3592C24.0113 23.3727 24.6263 22.6426 24.6242 21.8323H24.6263ZM17.4044 21.7252C17.4056 21.5255 17.3669 21.3275 17.2906 21.1429C17.2143 20.9583 17.102 20.7908 16.9602 20.6502C16.8183 20.5095 16.6499 20.3986 16.4647 20.3239C16.2794 20.2492 16.0812 20.2122 15.8815 20.2151C15.4827 20.2187 15.1012 20.3786 14.8189 20.6602C14.5366 20.9419 14.3759 21.323 14.3713 21.7218C14.3713 22.5543 15.0732 23.2629 15.8909 23.2569C16.2937 23.2517 16.6782 23.0881 16.9611 22.8013C17.244 22.5146 17.4026 22.128 17.4023 21.7252H17.4044ZM19.52 27.1749C19.9875 27.2113 20.362 27.1581 20.7358 27.1076C21.7273 26.9729 22.5881 26.5317 23.4044 25.9827C23.433 25.9655 23.4569 25.9415 23.4739 25.9128C23.491 25.8842 23.5006 25.8517 23.5021 25.8184C23.5162 25.6574 23.4819 25.5153 23.3364 25.4237C23.2652 25.3777 23.1815 25.3552 23.0968 25.3595C23.0122 25.3637 22.9311 25.3944 22.8649 25.4473C22.5557 25.6647 22.2272 25.8535 21.8835 26.011C21.0402 26.3902 20.1511 26.4448 19.2445 26.4259C18.5203 26.4118 17.8074 26.2437 17.1531 25.9329C16.8592 25.787 16.5748 25.6225 16.3018 25.4405C16.0323 25.2721 15.7501 25.3786 15.6821 25.6594C15.6316 25.8655 15.7494 25.9962 15.9023 26.0999C16.3974 26.4474 16.9425 26.7174 17.5189 26.9008C18.1658 27.1009 18.8411 27.1935 19.518 27.1749H19.52Z"
            fill="#040524"
          />
        </svg>
        </a>
      </div>
      }
      {auditData.coin && auditData.coin.discord && 
      <div className="flex items-center justify-center w-10 h-10 bg-gray-500 rounded-full">
        <a href={auditData.coin.discord} target="_blank" rel="noopener noreferrer">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="20" cy="20" r="20" fill="#D9D9D9" />
              <path
                d="M29.4336 22.2149V24.4224C29.4141 24.611 29.3894 24.7995 29.3772 24.9891C29.3745 25.0412 29.3593 25.092 29.3328 25.137C29.3063 25.182 29.2693 25.22 29.2251 25.2476C27.7666 26.3076 26.1469 27.1256 24.4281 27.6701C24.2796 27.7169 24.1854 27.6938 24.0953 27.5616C23.8146 27.1482 23.545 26.729 23.3054 26.2898C23.1042 25.9212 23.1058 25.9186 23.4987 25.76C23.888 25.6007 24.2669 25.4169 24.633 25.2097C24.7035 25.1702 24.8031 25.1344 24.7104 25.0201C24.5698 24.8469 24.4355 24.8095 24.2322 24.899C22.5592 25.631 20.8161 25.9954 18.9845 25.9391C17.4318 25.8894 15.9033 25.5402 14.483 24.9106C14.2882 24.8253 14.1565 24.8469 14.0091 24.9812C13.899 25.0797 13.8911 25.1307 14.0291 25.206C14.4533 25.4434 14.8932 25.6517 15.3456 25.8296C15.5173 25.8949 15.5478 25.977 15.4588 26.1403C15.1976 26.6195 14.9131 27.0839 14.6052 27.5337C14.4951 27.6948 14.3877 27.719 14.2097 27.6611C12.5373 27.12 10.9583 26.3244 9.52811 25.3024C9.4545 25.2548 9.39368 25.1899 9.35099 25.1133C9.30829 25.0367 9.28503 24.9509 9.28324 24.8632C9.19529 23.5246 9.2053 22.1859 9.40541 20.8552C9.79616 18.2584 10.7746 15.8934 12.2244 13.7127C12.2717 13.6337 12.3411 13.5702 12.424 13.53C13.6701 12.9676 14.9801 12.5595 16.3251 12.3145C16.452 12.2908 16.54 12.3272 16.5979 12.4472C16.7185 12.6953 16.8507 12.9375 16.9665 13.1882C17.0271 13.3188 17.0919 13.3693 17.2514 13.3462C18.6449 13.1534 20.0582 13.1534 21.4517 13.3462C21.5892 13.3651 21.655 13.3314 21.7103 13.2087C21.8235 12.9575 21.9557 12.7148 22.071 12.4646C22.1384 12.3219 22.2379 12.2914 22.3901 12.3193C23.7082 12.5643 24.9928 12.9641 26.217 13.5105C26.3086 13.5475 26.3871 13.6107 26.443 13.6922C27.8301 15.7581 28.7911 17.9972 29.215 20.4586C29.3156 21.0411 29.3667 21.6288 29.4336 22.2149ZM20.9214 20.8009C20.9107 21.2383 21.0446 21.6669 21.3021 22.0206C22.0173 23.0438 23.4218 23.0317 24.1222 21.999C24.6261 21.2564 24.6135 20.2216 24.0921 19.4991C23.4218 18.5707 22.1542 18.5144 21.4112 19.3833C21.0741 19.7782 20.9151 20.2417 20.9214 20.8009ZM17.7907 20.7619C17.7857 20.3913 17.6914 20.0273 17.5158 19.7008C16.9313 18.6555 15.6158 18.4501 14.799 19.2795C14.0054 20.0842 14.0091 21.476 14.8085 22.2739C15.5415 23.0059 16.6727 22.9406 17.3183 22.1301C17.6348 21.7341 17.7675 21.2743 17.7907 20.7619Z"
                fill="#040524"
              />
            </svg>
        </a>
      </div>
      }

    </div>
  );
  const CopybarMobile = () => {
    return(<>
    <div className="my-5">
      <div
        className="text-center"
        style={{
          background: "#1F3D5F",
          borderTopLeftRadius: 6,
          borderTopRightRadius: 6,
          border: "0.25px #7CD8F8 solid",
        }}
      >
        Contract Address
      </div>
      <div
        className="flex justify-between px-5 py-3 text-center"
        style={{ border: "0.25px #7CD8F8 solid" }}
      >{auditData&&auditData.coin&&auditData.coin.address&&(
        <button className="buttoncoppy" onClick={() => handleCopy(auditData.coin.address)}>
          <div className="buttoncoppy_1">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-400">
          <svg
            width={20}
            height={32}
            viewBox="0 0 10 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <rect y="0.5" width="9.17266" height={15} fill="url(#pattern0)" />
            <defs>
              <pattern
                id="pattern0"
                patternContentUnits="objectBoundingBox"
                width={1}
                height={1}
              >
                <use
                  xlinkHref="#image0_263_1657"
                  transform="matrix(0.000798483 0 0 0.000488281 -0.00184686 0)"
                />
              </pattern>
              <image
                id="image0_263_1657"
                width={1257}
                height={2048}
                xlinkHref="data:image/png;base64,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rz5q586dNz388MN/OD093TLHUa020i1atGj/i170ojfdd999V7jXwIFOPfXUnunp6XNSylfkHD+rCCycnOP/32g0PqIErcBIRwv9csxpZGTkExHxSjVgwX0hIvoqlcrtUsCBzj777F998sknNz3xxBO/lHNe8O+nVUa6UqmUly5d+pndu3ef/vjjj0+4p8CBent7T42IjRH5/1YDFtx7i6Jxngy0CiMdLWXjxo3/dP/+/bdFxEvUgAU3lVJ6x6JFiy7r6+t7Rg440OrVq/seffTRq3bt2vWihfw+WmGkW7p06b3Lli37gzvuuOOb7hlwoOXLl/98uZzeFpFWOQ+DlnBPzvErjUZjlxS0Ck8OtJxrrrnmvzWbzb93/4SW8VBKaf3AwMAHUkpZDvhxZ5111ov27dv3pw899NDK/fv3L8hz10KOdIsWLdp91FFHDdxzzz3vcm+AA730pS9dfMwxx1wQkd8cES9WBFrCdM5xcqPR+LIUtBIjCC1peHj4xoi4SAloKZtTSn2Dg4O3SgEHWrVq1b/evXv3Rx955JGXzfdbYBdipCuVSvmoo476+NFHH/2/t2/fvt89AA7U29v7XyLyDRHx79WAVpIvLYqxt+pAqzHS0ZJqtdqLli1btjUiXKsDWkszIj4YEQOVSuUJOeBAK1euXPXkk0++/emnn563V8zM50iXUooXvehFdxx99NF/eOedd97lFocDLV++/F+Xy+XrIvLvqwEtp3Hsscf95qZNm2akoNUY6WhZGzZs+E8ppa9ExIvUgJbzVERcfvzxx994+umnO8CBn1Cr1Up33XXXOx5++OHz9u7dW5rrP2++RrrFixc/vWTJkvPuu+++j7qV4UAnnHDCUUuXLh2KyOsiYoki0GrS0z090y8fHf3y/VrQkvdQCWhlIyMjlZzzBiWgRZ9EUrolIi4eHBwcUwMOdO655/6Lp59++mMPP/zwCc1mc87+nLke6crl8szSpUvfe//9918Q339FLfATent7XxmRb4yI49WAlj16XVkUxYd0oGXvoRLQymq1WmnZsmWfi4jfUQNaVo6Im5rN5tDQ0NAjcsCBzjrrrN97/PHH3//UU0/97Fx8/bka6X7w1tav9vT0/I/77rvvUbckHGj58uX/vlwubYyI/6oGtPABa46bGo3GaiVoZUY6Wt4111zz881m89aI+Fk1oKVN5pyH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"
              />
            </defs>
          </svg>
        </div>
        <div className="w-[5px]"></div>
        <div className="items-center justify-center" style={{ fontSize: '12px' }}>{auditData.coin.address}</div>
        <div className="w-[5px]"></div>
        <div>
          <CopyOutlined className="items-center justify-center flex" width={50} height={50} />
        </div>
        </div>
        </button>)}
      </div>
    </div>
    </>
    )
};
  const OgnMobile = () => {
    useEffect(() => {
      if (!auditData)
      {        
        const slug = router.query.slug;
        fetchAuditData(slug);
      }
    }, [router.query.slug]);
    if (!auditData) {
      return <div><p>Loading...</p></div>;
    }
    return (<>  
    <div className="text-white">
      <Breadcrumb
        className="my-5"
        items={[
          {
            title: (
              <Link className="text-white" href="#">
                Home
              </Link>
            ),
          },
          {
            title: (
              <Link className="text-white" href="#">
                Audit
              </Link>
            ),
          },
          {
            title: "Logo",
          },
        ]}
      />
      <div className="flex text-white">
        <div className="flex items-center justify-center">
        <div className="w-20 h-20 bg-slate-200 rounded-full flex items-center justify-center" style={{ background: 'transparent' }}>{auditData.coin && auditData.coin.icon && <img src={auditData.coin.icon} loading="lazy"></img> }</div>
          <div className="flex flex-col gap-3">
            <p className="mx-4 text-2xl font-bold">{auditData.name}</p>
            <div className="flex justify-start mx-4">
              {auditData.assessments&&auditData.assessments[0].types&&auditData.assessments[0].types.map((type, index) => (
                      <TagCustom key={index} className="text-white rounded-2xl">
                        {type}
                      </TagCustom>
                ))}
            </div>
          </div>
        </div>
      </div>
      <CopybarMobile />
      <div className="flex justify-center my-10">
        <Socialbar />
      </div>
      <TextOrigin />
      <AuditDataMobile />

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
    </>)};
  
  return (
    <>
      {/* Display the desktop footer on screens larger than sm (640px) */}
      <div className="hidden sm:block">
        <OgnDesktop />
      </div>
      {/* Display the mobile footer on screens smaller than sm (640px) */}
      <div className="block mx-4 sm:hidden">
        <OgnMobile />
      </div>
    </>
  );
};


export default Ogn;

