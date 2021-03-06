import GenericModal from "../GenericModal";

function ConfirmDelete(props) {
  console.log("In confirm delete ", props)
  return (
      <>
        <GenericModal
            title={props.title}
            visible={props.visible}
            setVisible={props.setVisible}
            setLoadingStatus={props.setLoadingStatus}
            action={props.action}
        >
          <p className={"modal-subtitle"}>
            {'Are you sure you want to delete ' + props.deleteText + '?'}
          </p>
          <p className="modal-subtitle">
            {props.extraText}
          </p>
        </GenericModal>
      </>
  
  );
}

export default ConfirmDelete;