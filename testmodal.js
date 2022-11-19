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

//이미지 첨부
document.querySelector("#input-file").addEventListener("click", () => {
    let selectFile = document.querySelector("#inputImage").files[0];
    const file = URL.createObjectURL(selectFile);
    document.querySelector(".uploadImage").src = file;
});

//게시물 수정, 삭제
function onEditing() {
    alert("게시물 수정 완료!");
}
function delete_desc() {
    alert("게시물 삭제 완료!");
}
