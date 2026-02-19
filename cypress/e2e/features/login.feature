Feature: Login
Login para acesso ao AP

  Scenario: Login com sucesso
    Given que eu queira acessar o sistema
    When eu inserir o login e senha
    And clicar no botão entrar
    Then tenho meu acesso realizado com sucesso

  Scenario Outline: Login
    Given que eu queira acessar o sistema
    When eu inserir o login "<login>"e senha "<senha>"
    And clicas no botão entrar
    Then tenho meu acesso "<mensagem>"

    Examples:
      | login  | senha | mensagem                  |
      | danilo |  1234 | login com sucesso         |
      | lucas  |  0987 | login com senha incorreta |

