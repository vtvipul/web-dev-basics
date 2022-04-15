import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
	const [modalIsOpen, setModalOpen] = useState(false);

	function Delete() {
		setModalOpen(true);
	}

	function closeModal() {
		setModalOpen(false);
	}

	return (
		<div className="card">
			<h2>{props.titleName}</h2>
			<div className="actions">
				<button className="btn" onClick={Delete}>
					Delete
				</button>
			</div>
			{modalIsOpen && <Modal onCancel={closeModal} onConfirm={closeModal} />}
			{modalIsOpen && <Backdrop onClick={closeModal} />}
		</div>
	);
}

export default Todo;
