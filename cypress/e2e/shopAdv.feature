Feature: Case Inmetrics

    Background: Before Each
        Given acesso homepage Adventure Shop

    Scenario: Criacao de conta
        When acesso pagina de login
        And preencho dados pessoais
        Then Crio conta

    Scenario: Buscar produto e adicionar ao carrinho
        When o usuário deve fazer login
        And busco um produto
        And adiciono o produto ao carrinho
        And o produto deve ser adicionado ao carrinho
        Then realizar pagamento do produto