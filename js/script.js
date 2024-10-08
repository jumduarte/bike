function ModalWarning(){
    Swal.fire({
        title: "Item adicionado ao carrinho!!",
        text: "Seu item foi adicionado ao carrinho com sucesso",
        icon: "success"
      });
  } 
  function ModalShop(){
    Swal.fire({
      title: "Deseja Finalizar a compra?",
      text: "Você não poderá reverter isso.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Finalizar Compra"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Compra finalizada!!",
          text: "Sua compra foi realizada com sucesso.",
          icon: "success"
        });
      }
    });
  }