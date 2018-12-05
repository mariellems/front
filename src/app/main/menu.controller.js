export default class MenuController {
    constructor() {
        this.itens = [
            {
                state:'app.dashboard',
                icon: 'icon-home',
                name: 'Dashboard'
            },{
                state:'app.atendimento',
                icon: 'icon-users',
                name: 'Atendimento'
            },{
                state:'app.produtos',
                icon: 'icon-shopping-cart',
                name: 'Produtos'
            },{
                state:'app.servicos',
                icon: 'icon-grid',
                name: 'Serviços'
            }
        ]
    }
}