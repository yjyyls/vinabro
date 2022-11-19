//모달 띄우기
const openButton = document.getElementById("open");
const modal = document.querySelector(".modal");
// const overlay = modal.querySelector(".modal_overlay");
const closeBtn = modal.querySelector("input");
const openModal = () => {
    modal.classList.remove("hidden");
};
const closeModal = () => {
    modal.classList.add("hidden");
};
// overlay.addEventListener("click", closeModal);
closeBtn.addEventListener("click", closeModal);
openButton.addEventListener("click", openModal);

function save() {
    alert("게시물 저장 완료!");
}
function onFileChange() {
    alert("이미지 수정 완료!")
}