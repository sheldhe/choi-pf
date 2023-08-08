import React, { useState, useRef } from "react";
import Contents from "components/sub/contents";
import { useAddInquiryMutation } from "services/query/useInquiryQurey";
import { useInputModal } from "assets/hooks";
import CompleteModal from "components/modal/complete-modal";

const radioList = [
  { key: "inquiry", name: "문의" },
  { key: "cheering", name: "응원" },
  { key: "advice", name: "조언" },
];
const Inquiry = () => {
  const [checked, setChecked] = useState(false);
  const [select, setSelect] = useState("inquiry");
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const { mutate: addInquiry, isLoading, isError } = useAddInquiryMutation();
  const checkInput = useRef();
  const titleInput = useRef();
  const contentsInput = useRef();
  const writerInput = useRef();
  const selectSuccessPop = useInputModal(false); // 답변 등록 완료팝업

  const onChange = (value) => {
    setChecked(value);
  };
  const handleRadioChange = (key) => {
    setSelect(key);
  };
  const handleWrite = async () => {
    if (!checked) {
      alert("개인정보 수집 및 이용에 동의하셔야 합니다.");
      checkInput.current.focus();
      return false;
    }
    if (writer === "") {
      alert("작성자를 입력해주세요.");
      writerInput.current.focus();
      return false;
    }
    if (title === "") {
      alert("제목을 입력해주세요.");
      titleInput.current.focus();
      return false;
    }
    if (contents === "") {
      alert("내용을 입력해주세요.");
      contentsInput.current.focus();
      return false;
    }
    addInquiry({
      select: select,
      writer: writer,
      title: title,
      contents: contents,
    });
    selectSuccessPop.onChange();
  };
  const handleClose = () => {
    handleRefre();
    selectSuccessPop.onChange();
  };
  const handleRefre = () => {
    setChecked(false);
    setSelect(radioList[0].key);
    setWriter("");
    setTitle("");
    setContents("");
  };

  return (
    <>
      <div className="bg-inquiry01 h-screen w-screen bg-cover max-h-[20rem] flex justify-center pt-20"></div>
      <Contents
        title={"1:1 문의하기"}
        subTitle={
          "필요하신 문의 내용을 입력하여 주시면 친절하게 답변하겠습니다."
        }
      >
        <div className="w-full  mt-8">
          <div className="flex flex-col mb-8">
            <div className="flex flex-col">
              <div className="flex flex-row justify-between items-center ">
                <div className="font-semibold text-2xl font-gy">
                  개인정보 수집 및 이용에 대한 동의&nbsp;
                  <span className="text-orange-500 text-2xl">˙</span>
                </div>
                <div className="text-base font-semibold font-gy text-orange-500">
                  * 필수입력
                </div>
              </div>
              <div className="border mt-6 mb-6 p-8  h-96 overflow-auto">
                <div>
                  <div className="font-semibold mb-6">
                    1. 처리하는 개인정보 항목
                  </div>
                  <div className="font-semibold  mb-6">
                    주식회사 초이회사(이하, “회사”라 합니다)은 다음과 같은
                    개인정보 항목을 처리하고 있습니다.
                  </div>
                  <div className="mb-6 text-neutral-500">
                    1) 고객상담 서비스 운영 : 이메일주소, 연락처, 성명,
                    비밀번호, 민원 내용
                    <br />
                    2) 인터넷 서비스 이용과정에서 아래 개인정보 항목이 자동으로
                    생성되어 수집될 수 있습니다.
                    <br />: IP주소, 쿠키, 접속 로그, MAC주소, 서비스 이용기록,
                    방문기록, 불량 이용기록 등
                  </div>
                </div>

                <div className="mb-6 font-semibold">2. 개인정보의 처리목적</div>
                <div className="mb-6">
                  회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고
                  있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며,
                  이용 목적이 변경되는 경우에는 개인정보 보호법 제18조에 따라
                  별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
                  <br />
                  고객상담 서비스 운영을 위해 민원인의 신원 확인, 민원사항 확인,
                  사실조사를 위한 연락·통지, 처리결과 통보 등의 목적으로
                  개인정보를 처리합니다.
                </div>
                <div className="mb-6">
                  <div className="mb-6 font-semibold">
                    3. 개인정보의 처리 및 보유기간
                  </div>
                  <div>
                    회사는 법령에 따른 개인정보 보유·이용기간 또는
                    정보주체로부터 개인정보를 수집시에 동의받은 개인정보
                    보유-이용기간 내에서 개인정보를 처리·보유합니다. 고객상담
                    서비스 운영기간 동안 보유하고 있으며, 이외의 다른 목적으로
                    사용되지 않습니다.
                  </div>
                </div>
                <div className="mb-6">
                  <div className="mb-6 font-semibold">
                    4. 개인정보 수집 및 이용에 대한 동의를 거부할 권리
                  </div>
                  <div>
                    이용자는 위의 개인정보 수집 및 이용에 대하여 동의하지 않을
                    권리를 가지고 있습니다.
                  </div>
                  <div>
                    단, 개인정보 수집 및 이용은 회사가 사이트를 운영함에 있어
                    필수적인 정보로써, 개인정보의 수집 및 이용에 대하여 동의하지
                    않는 이용자는 고객상담 서비스 이용이 제한됩니다.
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div className="text-base font-semibold">
                  위의&nbsp;
                  <span className="text-orange-500">개인정보 수집 및 이용</span>
                  에 동의하십니까?
                </div>
                <div className="flex items-center">
                  <input
                    ref={checkInput}
                    id="orange-checkbox"
                    type="checkbox"
                    checked={checked}
                    onChange={({ target: { checked } }) => onChange(checked)}
                    // value=""
                    className="w-4 h-4 text-black  accent-black border-gray-300 rounded focus:border-black"
                  />
                  <label
                    htmlFor="orange-checkbox"
                    className="ml-2  text-base font-semibold"
                  >
                    동의합니다.
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col border-t border-black">
            <div className="flex flex-row h-20 border-b">
              <div className="w-3/12 flex items-center border-r font-semibold text-base font-gy pl-4 bg-slate-50">
                구분&nbsp;<span className="text-orange-500 text-lg">˙</span>
              </div>
              <div className="w-9/12 flex  items-center pl-8 pr-8">
                <div className="flex">
                  {radioList.map((value) => (
                    <div className="flex items-center mr-4" key={value.key}>
                      <input
                        id={`${value.key}-radio`}
                        type="radio"
                        value={value.key}
                        name={`${value.key}-radio`}
                        checked={select === value.key}
                        className=" accent-black"
                        onChange={() => handleRadioChange(value.key)}
                      />
                      <label
                        htmlFor={`${value.key}-radio`}
                        className="ml-2 text-sm font-medium text-black font-gy"
                      >
                        {value.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-row h-20 border-b">
              <div className="w-3/12 flex items-center border-r font-semibold text-base font-gy pl-4 bg-slate-50">
                작성자&nbsp;<span className="text-orange-500 text-lg">˙</span>
              </div>
              <div className="w-9/12 flex items-center pl-8 pr-8">
                <input
                  ref={writerInput}
                  type="text"
                  id="first_name"
                  value={writer}
                  onChange={(e) => setWriter(e.target.value)}
                  className=" border text-gray-900 text-sm  focus:border-blue-500 block w-6/12 p-2.5"
                  required
                />
              </div>
            </div>
            <div className="flex flex-row h-20 border-b">
              <div className="w-3/12 flex items-center border-r font-semibold text-base font-gy pl-4 bg-slate-50">
                제목&nbsp;<span className="text-orange-500 text-lg">˙</span>
              </div>
              <div className="w-9/12 flex items-center pl-8 pr-8">
                <input
                  ref={titleInput}
                  type="text"
                  id="first_name"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className=" border text-gray-900 text-sm  focus:border-blue-500 block w-8/12 p-2.5"
                  required
                />
              </div>
            </div>
            <div className="flex flex-row border-b">
              <div className="w-3/12 flex items-center border-r font-semibold text-base font-gy pl-4 bg-slate-50">
                내용&nbsp;<span className="text-orange-500 text-lg">˙</span>
              </div>
              <div className="w-9/12 flex  items-center pl-8 pr-8 pt-6 pb-6">
                <textarea
                  id="message"
                  ref={contentsInput}
                  rows="10"
                  value={contents}
                  onChange={(e) => setContents(e.target.value)}
                  className="block p-2.5 w-full text-sm text-gray-900   border  focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>
            </div>
            <div className="flex flex-row mt-16 mb-20 justify-center">
              <button
                type="button"
                className="px-24 py-4 text-base font-medium text-gray-900  inline-flex items-center bg-white hover:bg-gray-900  hover:text-white focus:outline-none text-center border mr-4"
                onClick={handleRefre}
              >
                취소
              </button>
              <button
                type="button"
                className="px-24 py-4 text-base font-medium text-white inline-flex items-center bg-gray-900 hover:bg-orange-600  focus:outline-none text-center border"
                onClick={handleWrite}
              >
                작성
              </button>
            </div>
          </div>
        </div>
      </Contents>
      <CompleteModal
        open={selectSuccessPop.value}
        onOpen={selectSuccessPop.onChange}
        onClose={() => handleClose()}
        isError={isError}
        isLoading={isLoading}
      />
    </>
  );
};

export default Inquiry;
