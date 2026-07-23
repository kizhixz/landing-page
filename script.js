// ============================================================
// RUBY DOCS — Content Data (Modules, Challenges, Projects)
// ============================================================
// This file only holds DATA. All UI/rendering lives in app.js
// ============================================================

const MODULES = [
  {
    id: 'introducao',
    title: 'Introdução ao Ruby',
    number: 1,
    level: 'basico',
    category: 'basico',
    description: 'Conheça a história do Ruby, instale o ambiente e execute seu primeiro programa.',
    topics: ['História', 'Instalação', 'IRB', 'RubyGems', 'Bundler', 'Hello World'],
    icon: '💎',
    docs: ['https://www.ruby-lang.org/pt/documentation/installation/'],
    sections: [
      {
        title: 'O que é Ruby?',
        type: 'text',
        content: `<p>Ruby é uma linguagem de programação dinâmica, open source, com foco na simplicidade e produtividade. Criada por Yukihiro "Matz" Matsumoto no Japão em 1995, Ruby combina partes das suas linguagens favoritas (Perl, Smalltalk, Eiffel, Ada e Lisp) para formar uma nova linguagem que equilibra programação funcional com programação imperativa.</p>
        <p>Matz diz que queria fazer Ruby natural, não simples, de uma forma que reflita a vida.</p>
        <p><strong>Ruby é:</strong></p>
        <ul>
          <li>Interpretada — o código é executado diretamente, sem compilação</li>
          <li>Orientada a objetos — tudo em Ruby é um objeto</li>
          <li>Dinâmica — tipos são resolvidos em tempo de execução</li>
          <li>Flexível — métodos podem ser adicionados/modificados em tempo de execução</li>
          <li>Expressiva — código Ruby parece quase inglês</li>
        </ul>`
      },
      {
        title: 'Instalação',
        type: 'text',
        content: `<p>Para instalar Ruby no seu sistema:</p>
        <p><strong>Linux (Ubuntu/Debian):</strong></p>`
      },
      {
        title: 'Exemplo: Terminal',
        type: 'code',
        lang: 'bash',
        code: `sudo apt update
sudo apt install ruby-full
ruby --version`,
        comment: 'Verifique se a instalação foi bem-sucedida com ruby --version'
      },
      {
        title: 'Exemplo: Windows',
        type: 'code',
        lang: 'bash',
        code: `# Baixe o RubyInstaller em rubyinstaller.org
# Execute o instalador e marque "Add Ruby to PATH"
# Após instalar, verifique:
ruby --version`,
        comment: 'Recomenda-se usar Ruby + DevKit para acesso a gems nativas'
      },
      {
        title: 'Exemplo: macOS',
        type: 'code',
        lang: 'bash',
        code: `brew install ruby
ruby --version`,
        comment: 'macOS já vem com Ruby, mas a versão pode estar desatualizada'
      },
      {
        title: 'RubyGems e Bundler',
        type: 'text',
        content: `<p><strong>RubyGems</strong> é o gerenciador de pacotes oficial do Ruby. Com ele você instala bibliotecas (gems) facilmente:</p>`
      },
      {
        title: 'Exemplo: RubyGems',
        type: 'code',
        lang: 'bash',
        code: `gem install rails
gem install sinatra
gem list  # lista todas as gems instaladas`,
        comment: 'RubyGems vem incluído com Ruby desde a versão 1.9'
      },
      {
        title: 'Bundler',
        type: 'text',
        content: `<p><strong>Bundler</strong> gerencia as dependências do seu projeto. Crie um arquivo <code>Gemfile</code>:</p>`
      },
      {
        title: 'Exemplo: Gemfile',
        type: 'code',
        lang: 'ruby',
        code: `# Gemfile
source 'https://rubygems.org'

gem 'sinatra'
gem 'pg'
gem 'rspec', group: :test`,
        comment: 'Depois execute bundle install para instalar todas as gems'
      },
      {
        title: 'Seu Primeiro Programa',
        type: 'text',
        content: `<p>Crie um arquivo <code>ola.rb</code> e escreva:</p>`
      },
      {
        title: 'Exemplo: hello.rb',
        type: 'code',
        lang: 'ruby',
        code: `# hello.rb — seu primeiro programa Ruby
puts "Olá, mundo!"
puts "Bem-vindo ao Ruby!"`,
        comment: 'Execute com: ruby ola.rb'
      },
      {
        title: 'IRB — Ruby Interativo',
        type: 'text',
        content: `<p>IRB (Interactive Ruby) é um ambiente REPL para testar código Ruby rapidamente. Digite <code>irb</code> no terminal.</p>`
      },
      {
        title: 'Exemplo: IRB',
        type: 'code',
        lang: 'ruby',
        code: `$ irb
irb(main):001:0> 2 + 2
=> 4
irb(main):002:0> "Ruby".length
=> 4
irb(main):003:0> 3.times { puts "Ruby!" }
Ruby!
Ruby!
Ruby!
=> 3`,
        comment: 'IRB é ótimo para experimentar e aprender Ruby'
      },
      {
        title: 'Resumo',
        type: 'info',
        style: 'tip',
        icon: '📌',
        content: '<strong>Ruby</strong> é uma linguagem elegante e poderosa. Instale, abra o IRB e comece a experimentar. No próximo módulo vamos mergulhar na sintaxe básica!'
      },
      {
        title: 'Erros Comuns',
        type: 'info',
        style: 'error-box',
        icon: '⚠️',
        content: '<strong>Erro:</strong> "ruby: No such file or directory" — você esqueceu de salvar o arquivo ou está no diretório errado.<br><strong>Erro:</strong> "gem: command not found" — Ruby não foi adicionado ao PATH corretamente.'
      },
      {
        title: 'Boas Práticas',
        type: 'info',
        style: 'info',
        icon: '💡',
        content: '<strong>Use version managers:</strong> RVM ou rbenv para gerenciar múltiplas versões de Ruby.<br><strong>Sempre use Bundler:</strong> mesmo em projetos pequenos.<br><strong>Mantenha o Ruby atualizado:</strong> cada versão traz melhorias de performance e segurança.'
      }
    ],
    exercises: [
      { id: 'intro-ex1', question: 'Qual comando exibe texto no terminal?', answer: 'puts', hint: 'É o comando mais básico de saída em Ruby', difficulty: 'facil' },
      { id: 'intro-ex2', question: 'Qual comando inicia o ambiente interativo do Ruby?', answer: 'irb', hint: 'São 3 letras', difficulty: 'facil' },
      { id: 'intro-ex3', question: 'Qual gerenciador de pacotes é usado para instalar gems?', answer: 'gem', hint: 'Termo em inglês para "joia"', difficulty: 'facil' },
      { id: 'intro-ex4', question: 'Qual arquivo o Bundler procura para saber as dependências?', answer: 'Gemfile', hint: 'Começa com G maiúsculo', difficulty: 'medio' },
      { id: 'intro-ex5', question: 'Complete: para ver a versão do Ruby, use "ruby ___" no terminal', answer: '--version', hint: 'Duas barras antes', difficulty: 'medio' }
    ]
  },
  {
    id: 'sintaxe',
    title: 'Sintaxe Básica',
    number: 2,
    level: 'basico',
    category: 'basico',
    description: 'Aprenda variáveis, constantes, comentários, convenções e a estrutura básica do Ruby.',
    topics: ['Variáveis', 'Constantes', 'puts/print/p', 'Comentários', 'Convenções'],
    icon: '📝',
    docs: ['https://ruby-doc.org/core-3.0.0/doc/syntax.html'],
    sections: [
      {
        title: 'Variáveis em Ruby',
        type: 'text',
        content: `<p>Em Ruby, as variáveis são dinâmicas — você não precisa declarar o tipo. Ruby infere o tipo automaticamente.</p>
        <p><strong>Tipos de variáveis:</strong></p>
        <ul>
          <li><code>nome = "João"</code> — variável local (começa com letra minúscula ou _)</li>
          <li><code>$nome = "João"</code> — variável global (começa com $)</li>
          <li><code>@nome = "João"</code> — variável de instância (começa com @)</li>
          <li><code>@@nome = "João"</code> — variável de classe (começa com @@)</li>
        </ul>`
      },
      {
        title: 'Exemplo: Variáveis',
        type: 'code',
        lang: 'ruby',
        code: `# Variável local
nome = "Maria"
idade = 25
preco = 49.99

# Ruby é dinâmico - o tipo pode mudar
x = 10      # Integer
x = "dez"   # String — completamente válido

# Múltiplas atribuições
a, b, c = 1, 2, 3
puts a  # => 1
puts b  # => 2

# Troca de valores sem variável temporária
a, b = b, a
puts a  # => 2`, comment: 'Ruby permite atribuição paralela e troca de valores'
      },
      {
        title: 'Constantes',
        type: 'text',
        content: `<p>Constantes em Ruby começam com letra maiúscula. Ruby não impede a reatribuição, mas mostra um aviso.</p>`
      },
      {
        title: 'Exemplo: Constantes',
        type: 'code',
        lang: 'ruby',
        code: `PI = 3.14159
NOME_APP = "RubyQuest"
MAX_TENTATIVAS = 3

# Ruby permite reatribuir (com warning)
PI = 3.14  # warning: already initialized constant PI`,
        comment: 'Constantes devem ser usadas para valores que não mudam'
      },
      {
        title: 'Saída: puts, print, p',
        type: 'text',
        content: `<p>Ruby oferece três métodos principais para exibir dados:</p>
        <ul>
          <li><code>puts</code> — adiciona uma nova linha ao final</li>
          <li><code>print</code> — não adiciona nova linha</li>
          <li><code>p</code> — exibe a representação "inspecionada" do objeto (útil para debugging)</li>
        </ul>`
      },
      {
        title: 'Exemplo: puts vs print vs p',
        type: 'code',
        lang: 'ruby',
        code: `puts "Olá"     # Olá\\n
print "Olá"    # Olá (sem quebra de linha)

p "Olá"        # "Olá" (com aspas - mostra o tipo)
p 42           # 42
p [1, 2, 3]    # [1, 2, 3]

# Interpolação de strings
nome = "Ana"
puts "Olá, \#{nome}!"   # Olá, Ana!

# Concatenação
puts "Olá, " + nome     # Olá, Ana`, comment: 'Use p para debugging e puts para output normal'
      },
      {
        title: 'Comentários',
        type: 'text',
        content: `<p>Comentários são ignorados pelo interpretador. Use-os para documentar seu código.</p>`
      },
      {
        title: 'Exemplo: Comentários',
        type: 'code',
        lang: 'ruby',
        code: `# Comentário de uma linha: começa com #

=begin
Comentário de múltiplas linhas
Tudo entre =begin e =end é ignorado
Útil para documentar blocos grandes
=end

# Convenção: use # para comentários curtos
# e deixe comentários que expliquem o "porquê", não o "o que"`,
        comment: 'Prefira comentários de uma linha (#) no dia a dia'
      },
      {
        title: 'Convenções de Nomeação',
        type: 'text',
        content: `<p>Ruby tem convenções claras:</p>
        <ul>
          <li><strong>snake_case</strong> para variáveis e métodos: <code>nome_completo</code>, <code>calcular_total</code></li>
          <li><strong>CamelCase</strong> para classes e módulos: <code>UsuarioController</code>, <code>PagamentoHelper</code></li>
          <li><strong>SCREAMING_SNAKE_CASE</strong> para constantes: <code>MAX_VALUE</code>, <code>API_KEY</code></li>
          <li><strong>snake_case.rb</strong> para nomes de arquivo</li>
        </ul>`
      },
      {
        title: 'Resumo',
        type: 'info',
        style: 'tip',
        icon: '📌',
        content: 'Variáveis guardam dados, constantes começam com maiúscula, use <code>puts</code> para output, <code>#</code> para comentários e siga snake_case sempre.'
      },
      {
        title: 'Erros Comuns',
        type: 'info',
        style: 'error-box',
        icon: '⚠️',
        content: '<strong>Usar variável não definida:</strong> NameError (undefined local variable). <strong>Esquecer o # em comentários de linha.</strong> <strong>Usar camelCase para variáveis</strong> — embora funcione, vai contra a convenção.'
      },
      {
        title: 'Boas Práticas',
        type: 'info',
        style: 'info',
        icon: '💡',
        content: '<strong>Sempre inicialize variáveis</strong> antes de usá-las. <strong>Use nomes descritivos</strong> — `preco_total` é melhor que `pt`. <strong>Evite variáveis globais</strong> — elas podem ser alteradas de qualquer lugar, dificultando o debugging.'
      }
    ],
    exercises: [
      { id: 'sint-ex1', question: 'Qual o operador de atribuição em Ruby?', answer: '=', hint: 'É o mesmo que matemática', difficulty: 'facil' },
      { id: 'sint-ex2', question: 'Qual caractere inicia um comentário de uma linha?', answer: '#', hint: 'Também chamado de "hash" ou "jogo da velha"', difficulty: 'facil' },
      { id: 'sint-ex3', question: 'Que método exibe a representação inspecionada de um objeto?', answer: 'p', hint: 'Apenas uma letra', difficulty: 'facil' },
      { id: 'sint-ex4', question: 'Complete a sintaxe de interpolação: "Olá, \\#{___}"', answer: 'nome', hint: 'É uma variável', difficulty: 'medio' },
      { id: 'sint-ex5', question: 'Qual método de saída NÃO adiciona uma nova linha ao final?', answer: 'print', hint: 'É o oposto de puts', difficulty: 'medio' },
      { id: 'sint-ex6', question: 'Como se chama a convenção de nomes com palavras separadas por underline?', answer: 'snake_case', hint: 'Nome de animal + "case"', difficulty: 'medio' }
    ]
  },
  {
    id: 'tipos-dados',
    title: 'Tipos de Dados',
    number: 3,
    level: 'basico',
    category: 'basico',
    description: 'Domine Integers, Floats, Strings, Symbols, Booleans, Arrays, Hashes e nil.',
    topics: ['Integers', 'Floats', 'Strings', 'Symbols', 'Booleans', 'Arrays', 'Hashes', 'nil'],
    icon: '🔢',
    docs: ['https://ruby-doc.org/core-3.0.0/doc/syntax/literals_rdoc.html'],
    sections: [
      {
        title: 'Tipos Numéricos',
        type: 'text',
        content: `<p>Ruby tem dois tipos numéricos principais: <strong>Integer</strong> (inteiros) e <strong>Float</strong> (ponto flutuante).</p>
        <p>Ruby 3.0+ usa o <strong>Ractor</strong> e suporta inteiros arbitrários — não há limite prático!</p>`
      },
      {
        title: 'Exemplo: Números',
        type: 'code',
        lang: 'ruby',
        code: `# Integers
idade = 25
populacao = 8_000_000_000  # underscores são ignorados — mais legível
hex = 0xFF                 # 255 — hexadecimal
oct = 0o377                # 255 — octal
bin = 0b11111111           # 255 — binário

# Floats
altura = 1.75
pi = 3.14159
científico = 2.5e3         # 2500.0 — notação científica

# Métodos úteis
puts 10.even?   # true
puts 7.odd?     # true
puts -5.abs     # 5
puts 4.5.round  # 5
puts 4.5.floor  # 4
puts 4.5.ceil   # 5`,
        comment: 'Use underscores para separar milhares: 1_000_000'
      },
      {
        title: 'Strings',
        type: 'text',
        content: `<p>Strings representam texto. Podem ser criadas com aspas simples (<code>'</code>) ou duplas (<code>"</code>).</p>
        <p><strong>Diferença:</strong> aspas duplas permitem interpolação e caracteres especiais (<code>\\n</code>, <code>\\t</code>).</p>`
      },
      {
        title: 'Exemplo: Strings',
        type: 'code',
        lang: 'ruby',
        code: `# Strings
nome = "Maria"
saudacao = 'Olá'       # aspas simples — sem interpolação

# Interpolação (só com aspas duplas)
puts "Olá, \#{nome}!"  # Olá, Maria!
puts 'Olá, \#{nome}!'  # Olá, \#{nome}! (não interpola)

# Caracteres especiais
puts "Linha 1\\nLinha 2"  # quebra de linha
puts "Coluna1\\tColuna2"  # tab

# Heredoc
texto = <<~TEXTO
  Isto é um heredoc
  Preserva a formatação
  Remove a indentação (com ~)
TEXTO

# Métodos úteis
puts "ruby".upcase       # RUBY
puts "RUBY".downcase     # ruby
puts "ruby".capitalize   # Ruby
puts "ruby".length       # 4
puts "ruby".reverse      # ybur
puts "Olá mundo".split   # ["Olá", "mundo"]
puts "ruby".include?("r") # true`,
        comment: 'Strings em Ruby são mutáveis! (diferente de Java, por exemplo)'
      },
      {
        title: 'Symbols',
        type: 'text',
        content: `<p><strong>Symbols</strong> são strings imutáveis e únicas na memória. São usados principalmente como identificadores — perfeitos para chaves de hashes.</p>
        <p>Sintaxe: <code>:nome</code>, <code>:email</code></p>`
      },
      {
        title: 'Exemplo: Symbols vs Strings',
        type: 'code',
        lang: 'ruby',
        code: `# Symbols são imutáveis e únicos
:symbol.class  # Symbol
"string".class # String

# Diferença de memória
"nome".object_id == "nome".object_id  # false — objetos diferentes
:nome.object_id == :nome.object_id      # true — mesmo objeto

# Uso comum: chaves de hashes
usuario = { nome: "João", email: "joao@email.com" }
puts usuario[:nome]  # João`,
        comment: 'Symbols economizam memória e são mais rápidos que strings'
      },
      {
        title: 'Booleanos e nil',
        type: 'text',
        content: `<p>Ruby tem valores booleanos <code>true</code> e <code>false</code>, e <code>nil</code> representa "ausência de valor".</p>
        <p><strong>Curiosidade:</strong> em Ruby, apenas <code>false</code> e <code>nil</code> são considerados "falsy". Tudo mais é "truthy" — incluindo 0 e strings vazias!</p>`
      },
      {
        title: 'Exemplo: Booleanos e nil',
        type: 'code',
        lang: 'ruby',
        code: `ativo = true
inativo = false
nulo = nil

# Truthy e Falsy
puts !!0          # true — 0 é truthy!
puts !!""         # true — string vazia é truthy!
puts !!false      # false
puts !!nil        # false

# nil_methods
nome = nil
puts nome.nil?    # true
# puts nome.upcase  # NoMethodError — não chame métodos em nil

# Operador &.
puts nome&.upcase # nil — safe navigation (Ruby 2.3+)`,
        comment: 'Diferente de outras linguagens, 0 e "" são truthy em Ruby!'
      },
      {
        title: 'Arrays',
        type: 'text',
        content: `<p>Arrays são coleções ordenadas de elementos. Podem conter qualquer tipo de objeto.</p>`
      },
      {
        title: 'Exemplo: Arrays',
        type: 'code',
        lang: 'ruby',
        code: `# Criando arrays
numeros = [1, 2, 3, 4, 5]
frutas = ["maçã", "banana", "laranja"]
misto = [1, "dois", :tres, 4.0]

# Acessando elementos
puts numeros[0]    # 1
puts numeros[-1]   # 5 — índice negativo = do final
puts numeros[1..3] # [2, 3, 4] — range

# Métodos úteis
puts [1, 2, 3].length      # 3
puts [1, 2, 3].push(4)     # [1, 2, 3, 4]
puts [1, 2, 3].map { |n| n * 2 }  # [2, 4, 6]
puts [2, 1, 3].sort        # [1, 2, 3]
puts [1, 2, 3].first       # 1
puts [1, 2, 3].last        # 3`,
        comment: 'Arrays em Ruby são dinâmicos — crescem automaticamente'
      },
      {
        title: 'Hashes',
        type: 'text',
        content: `<p>Hashes são coleções de pares chave-valor. Funcionam como dicionários ou objetos literais.</p>`
      },
      {
        title: 'Exemplo: Hashes',
        type: 'code',
        lang: 'ruby',
        code: `# Sintaxe tradicional (hash rocket)
usuario = { "nome" => "Maria", "idade" => 30 }

# Sintaxe moderna (JSON-like) — chaves como symbols
usuario = { nome: "Maria", idade: 30 }
puts usuario[:nome]         # Maria
puts usuario[:idade]        # 30

# Métodos úteis
puts usuario.keys           # [:nome, :idade]
puts usuario.values         # ["Maria", 30]
usuario[:email] = "m@email.com"  # adiciona novo par

# Hashes com valores padrão
contagem = Hash.new(0)
contagem[:a] += 1
puts contagem[:a]  # 1
puts contagem[:b]  # 0 — valor padrão!`,
        comment: 'Prefira a sintaxe moderna (:key => value) para hashes'
      },
      {
        title: 'Type Casting (Conversão)',
        type: 'text',
        content: `<p>Ruby oferece métodos de conversão entre tipos:</p>`
      },
      {
        title: 'Exemplo: Conversões',
        type: 'code',
        lang: 'ruby',
        code: `# String para Integer
"42".to_i      # 42
"42.5".to_i    # 42 (trunca!)
"abc".to_i     # 0

# String para Float
"42.5".to_f    # 42.5

# Integer para String
42.to_s        # "42"

# Integer para Float
42.to_f        # 42.0

# Float para Integer
42.9.to_i      # 42 (trunca!)
42.9.round     # 43
42.9.ceil      # 43
42.9.floor     # 42

# Para Symbol
"nome".to_sym  # :nome`,
        comment: 'Sempre valide entradas antes de converter!'
      },
      {
        title: 'Resumo',
        type: 'info',
        style: 'tip',
        icon: '📌',
        content: 'Ruby tem Integers, Floats, Strings, Symbols, Booleans, Arrays, Hashes e nil. Symbols são imutáveis e únicos. Apenas false e nil são falsy. Use .to_i, .to_s, .to_f para conversões.'
      },
      {
        title: 'Erros Comuns',
        type: 'info',
        style: 'error-box',
        icon: '⚠️',
        content: '<strong>NoMethodError em nil:</strong> chamar métodos em nil sem safe navigation. <strong>TypeError:</strong> tentar somar string com número (use interpolação ou .to_s). <strong>Confundir símbolos com strings:</strong> :nome != "nome".'
      },
      {
        title: 'Boas Práticas',
        type: 'info',
        style: 'info',
        icon: '💡',
        content: '<strong>Use symbols para chaves de hash.</strong> <strong>Use &amp;. (safe navigation)</strong> para evitar erros com nil. <strong>Prefira interpolação a concatenação:</strong> "Nome: \#{nome}" é melhor que "Nome: " + nome.'
      }
    ],
    exercises: [
      { id: 'tipos-ex1', question: 'Qual método converte uma string para inteiro?', answer: 'to_i', hint: 'É um método de 3 letras', difficulty: 'facil' },
      { id: 'tipos-ex2', question: 'Qual é a classe de :nome?', answer: 'Symbol', hint: 'Começa com S maiúsculo', difficulty: 'facil' },
      { id: 'tipos-ex3', question: 'Em Ruby, 0 é considerado truthy ou falsy?', answer: 'truthy', hint: 'Ruby é diferente de JavaScript nisso', difficulty: 'medio' },
      { id: 'tipos-ex4', question: 'Qual método retorna o tamanho de uma string?', answer: 'length', hint: 'Pode ser abreviado para 4 letras', difficulty: 'facil' },
      { id: 'tipos-ex5', question: 'Complete: "Ruby".___ retorna "ruby"', answer: 'downcase', hint: 'É o oposto de upcase', difficulty: 'medio' },
      { id: 'tipos-ex6', question: 'Qual a sintaxe moderna (JSON-like) para criar um hash? use {:key => value} ou {key: value}', answer: '{key: value}', hint: 'É a forma mais nova', difficulty: 'medio' }
    ]
  },
  {
    id: 'operadores',
    title: 'Operadores',
    number: 4,
    level: 'basico',
    category: 'basico',
    description: 'Aritmética, comparação, lógica, atribuição e ranges — os operadores do Ruby.',
    topics: ['Aritmética', 'Comparação', 'Lógica', 'Atribuição', 'Ranges'],
    icon: '🧮',
    docs: ['https://ruby-doc.org/core-3.0.0/doc/syntax/operators_rdoc.html'],
    sections: [
      {
        title: 'Operadores Aritméticos',
        type: 'text',
        content: `<p>Ruby suporta todos os operadores aritméticos básicos:</p>`
      },
      {
        title: 'Exemplo: Aritmética',
        type: 'code',
        lang: 'ruby',
        code: `a = 10
b = 3

puts a + b   # 13  — adição
puts a - b   # 7   — subtração
puts a * b   # 30  — multiplicação
puts a / b   # 3   — divisão (inteiro!)
puts a / b.to_f  # 3.333... — divisão real
puts a % b   # 1   — módulo (resto)
puts a ** b  # 1000 — exponenciação

# Operador de exponenciação é ** (não ^)
puts 2 ** 3  # 8`,
        comment: 'Divisão de inteiros resulta em inteiro! Use .to_f para resultado real'
      },
      {
        title: 'Operadores de Comparação',
        type: 'text',
        content: `<p>Comparações sempre retornam true ou false:</p>`
      },
      {
        title: 'Exemplo: Comparação',
        type: 'code',
        lang: 'ruby',
        code: `puts 10 == 10    # true  — igualdade
puts 10 != 10    # false — diferente
puts 10 > 5      # true  — maior
puts 10 < 5      # false — menor
puts 10 >= 10    # true  — maior ou igual
puts 10 <= 5     # false — menor ou igual

# Comparação combinada (spaceship operator)
puts 1 <=> 2     # -1  — menor
puts 2 <=> 2     # 0   — igual
puts 3 <=> 2     # 1   — maior

# Comparação de igualdade: == vs .eql? vs .equal?
puts "a" == "a"        # true — valor
puts "a".eql?("a")     # true — valor + tipo
puts "a".equal?("a")   # false — mesmo objeto?`,
        comment: 'O operador <=> é muito usado em métodos de ordenação'
      },
      {
        title: 'Operadores Lógicos',
        type: 'text',
        content: `<p>Combinam condições booleanas:</p>`
      },
      {
        title: 'Exemplo: Lógica',
        type: 'code',
        lang: 'ruby',
        code: `a = true
b = false

puts a && b  # false — AND (ambos true)
puts a || b  # true  — OR (pelo menos um true)
puts !a      # false — NOT (negação)

# Short-circuit evaluation
# && para na primeira condição false
# || para na primeira condição true
puts false && (raise "não executa")  # false
puts true  || (raise "não executa")  # true

# Versões em palavras (mais legíveis)
puts a and b   # mesmo que &&
puts a or b    # mesmo que ||
puts not a     # mesmo que !`,
        comment: 'Prefira &&, ||, ! no código. Use and/or com moderação.'
      },
      {
        title: 'Operadores de Atribuição',
        type: 'text',
        content: `<p>Formas abreviadas de operar e atribuir:</p>`
      },
      {
        title: 'Exemplo: Atribuição',
        type: 'code',
        lang: 'ruby',
        code: `x = 10

x += 5   # x = x + 5  → 15
x -= 3   # x = x - 3  → 12
x *= 2   # x = x * 2  → 24
x /= 4   # x = x / 4  → 6
x %= 4   # x = x % 4  → 2
x **= 3  # x = x ** 3 → 8

# Atribuição paralela
a, b, c = 1, 2, 3

# Atribuição condicional (||=)
cache = nil
cache ||= "calculado"  # só atribui se for nil/false
puts cache  # "calculado"
cache ||= "novo"
puts cache  # "calculado" — não muda!`,
        comment: 'O operador ||= é muito usado para memoização em Rails'
      },
      {
        title: 'Ranges',
        type: 'text',
        content: `<p>Ranges representam intervalos. São extremamente úteis em Ruby.</p>`
      },
      {
        title: 'Exemplo: Ranges',
        type: 'code',
        lang: 'ruby',
        code: `# Range inclusivo (..)
(1..5).to_a   # [1, 2, 3, 4, 5]

# Range exclusivo (...)
(1...5).to_a  # [1, 2, 3, 4]

# Ranges com letras
("a".."e").to_a  # ["a", "b", "c", "d", "e"]

# Usos práticos
(1..10).each { |n| puts n }  # itera de 1 a 10

# Case com ranges
nota = 85
case nota
when 0..59 then puts "Reprovado"
when 60..89 then puts "Aprovado"
when 90..100 then puts "Excelente"
end

# Verificar pertinência
(1..10).include?(5)  # true  — Ruby 2.6+
(1..10) === 5        # true  — case equality`,
        comment: 'Use include? para verificar se um valor está no range'
      },
      {
        title: 'Resumo',
        type: 'info',
        style: 'tip',
        icon: '📌',
        content: 'Ruby tem operadores aritméticos (+, -, *, /, %, **), de comparação (==, !=, <, >, <=>, <=, >=), lógicos (&&, ||, !), de atribuição (+=, -=, ||=) e ranges (.., ...).'
      },
      {
        title: 'Erros Comuns',
        type: 'info',
        style: 'error-box',
        icon: '⚠️',
        content: '<strong>Usar = no lugar de ==:</strong> = é atribuição, == é comparação. <strong>Esquecer que divisão de inteiros trunca:</strong> 3/2 dá 1, não 1.5. <strong>Usar ^ para exponenciação:</strong> ^ é XOR binário, use **.'
      },
      {
        title: 'Boas Práticas',
        type: 'info',
        style: 'info',
        icon: '💡',
        content: '<strong>Use parênteses</strong> para deixar precedência clara. <strong>Use && e ||</strong> em vez de and/or na maioria dos casos. <strong>Use ranges</strong> em case statements para intervalos.'
      }
    ],
    exercises: [
      { id: 'op-ex1', question: 'Qual operador calcula o resto da divisão?', answer: '%', hint: 'É o mesmo que em matemática', difficulty: 'facil' },
      { id: 'op-ex2', question: 'Qual operador de comparação testa igualdade?', answer: '==', hint: 'São dois sinais de igual', difficulty: 'facil' },
      { id: 'op-ex3', question: 'Qual operador de exponenciação é usado em Ruby?', answer: '**', hint: 'Dois asteriscos', difficulty: 'facil' },
      { id: 'op-ex4', question: 'O que retorna 3 <=> 5? (-1, 0 ou 1)', answer: '-1', hint: '3 é menor que 5', difficulty: 'medio' },
      { id: 'op-ex5', question: 'Qual range é exclusivo no final: .. ou ...?', answer: '...', hint: 'Três pontos', difficulty: 'medio' },
      { id: 'op-ex6', question: 'O que faz o operador ||=?', answer: 'atribuição condicional', hint: 'Só atribui se a variável for nil/false', difficulty: 'dificil' }
    ]
  },
  {
    id: 'condicionais',
    title: 'Estruturas Condicionais',
    number: 5,
    level: 'basico',
    category: 'basico',
    description: 'if, else, elsif, unless, case/when — tome decisões no seu código Ruby.',
    topics: ['if/elsif/else', 'unless', 'case/when', 'Ternary', 'Truthy/Falsy'],
    icon: '🔀',
    docs: ['https://ruby-doc.org/core-3.0.0/doc/syntax/control_expressions_rdoc.html'],
    sections: [
      {
        title: 'if/elsif/else',
        type: 'text',
        content: `<p>O <code>if</code> executa um bloco se a condição for verdadeira. Ruby também tem <code>elsif</code> (cuidado: sem o 'e' extra de "else if").</p>`
      },
      {
        title: 'Exemplo: if/elsif/else',
        type: 'code',
        lang: 'ruby',
        code: `idade = 18

if idade >= 18
  puts "Maior de idade"
end

# Com else
if idade >= 18
  puts "Maior de idade"
else
  puts "Menor de idade"
end

# Com elsif (NÃO é "elseif")
nota = 85
if nota >= 90
  puts "Excelente"
elsif nota >= 70
  puts "Bom"
elsif nota >= 50
  puts "Suficiente"
else
  puts "Reprovado"
end

# if modificador (inline) — super útil!
puts "Maior" if idade >= 18`,
        comment: 'Use if modificador para condições simples de uma linha'
      },
      {
        title: 'unless',
        type: 'text',
        content: `<p><code>unless</code> é o oposto de <code>if</code>. Executa o bloco SE a condição for <strong>falsa</strong>.</p>`
      },
      {
        title: 'Exemplo: unless',
        type: 'code',
        lang: 'ruby',
        code: `# unless = if not
idade = 16

unless idade >= 18
  puts "Menor de idade"
end

# Equivalente a:
if !(idade >= 18)
  puts "Menor de idade"
end

# unless com else (possível, mas evite)
unless idade >= 18
  puts "Menor"
else
  puts "Maior"
end

# unless modificador — muito comum!
puts "Acesso negado" unless usuario.admin?`,
        comment: 'unless modificador é elegante para guard clauses'
      },
      {
        title: 'case/when',
        type: 'text',
        content: `<p><code>case/when</code> é o switch/case do Ruby. É mais poderoso e flexível que de outras linguagens.</p>`
      },
      {
        title: 'Exemplo: case/when',
        type: 'code',
        lang: 'ruby',
        code: `# case básico
linguagem = "Ruby"

case linguagem
when "Ruby"
  puts "Linguagem elegante!"
when "Python"
  puts "Linguagem versátil!"
when "Java"
  puts "Linguagem robusta!"
else
  puts "Linguagem interessante!"
end

# case com ranges
nota = 85
case nota
when 0..59 then puts "Reprovado"
when 60..89 then puts "Aprovado"
when 90..100 then puts "Excelente"
end

# case com múltiplos valores
fruta = "maçã"
case fruta
when "maçã", "pera", "banana"
  puts "Fruta comum"
when "kiwi", "manga"
  puts "Fruta tropical"
else
  puts "Fruta desconhecida"
end`,
        comment: 'then permite escrever case/when em uma linha'
      },
      {
        title: 'Operador Ternário',
        type: 'text',
        content: `<p>Forma compacta de if/else em uma linha.</p>`
      },
      {
        title: 'Exemplo: Ternário',
        type: 'code',
        lang: 'ruby',
        code: `idade = 20

# Tradicional
if idade >= 18
  status = "Adulto"
else
  status = "Jovem"
end

# Ternário — mesma lógica em uma linha!
status = idade >= 18 ? "Adulto" : "Jovem"

# Ternários aninhados (evite — fica ilegível)
nota = 85
resultado = nota >= 90 ? "Excelente" : nota >= 70 ? "Bom" : "Estude mais"
puts resultado  # Bom`,
        comment: 'Use ternário para condições simples. Para lógica complexa, prefira if/else.'
      },
      {
        title: 'Resumo',
        type: 'info',
        style: 'tip',
        icon: '📌',
        content: 'Use <code>if/elsif/else</code> para condições, <code>unless</code> para negação elegante, <code>case/when</code> para múltiplos valores e <code>ternário</code> para if/else simples.'
      },
      {
        title: 'Erros Comuns',
        type: 'info',
        style: 'error-box',
        icon: '⚠️',
        content: '<strong>Escrever "else if" em vez de "elsif"</strong> — isso gera um erro de sintaxe. <strong>Usar unless com else</strong> — evite, fica confuso. <strong>Esquecer o end</strong> — toda estrutura condicional precisa fechar com end.'
      },
      {
        title: 'Boas Práticas',
        type: 'info',
        style: 'info',
        icon: '💡',
        content: '<strong>Use if modificador</strong> para condições simples de uma linha. <strong>Prefira unless a if negado</strong> — "a menos que" é mais natural que "se não". <strong>Use case/when</strong> em vez de if/elsif para 3+ condições.'
      }
    ],
    exercises: [
      { id: 'cond-ex1', question: 'Qual palavra-chave é o "else if" do Ruby?', answer: 'elsif', hint: 'Sem o "e" extra', difficulty: 'facil' },
      { id: 'cond-ex2', question: 'Qual estrutura executa um bloco SE a condição for falsa?', answer: 'unless', hint: 'Significa "a menos que"', difficulty: 'facil' },
      { id: 'cond-ex3', question: 'Qual palavra fecha todas as estruturas condicionais?', answer: 'end', hint: 'Três letras', difficulty: 'facil' },
      { id: 'cond-ex4', question: 'Complete: status = idade >= 18 ? "Adulto" : "___"', answer: 'Jovem', hint: 'O oposto de adulto', difficulty: 'medio' },
      { id: 'cond-ex5', question: 'Qual estrutura substituiria uma corrente de 4+ if/elsif?', answer: 'case/when', hint: 'Também conhecido como switch/case', difficulty: 'medio' },
      { id: 'cond-ex6', question: 'O que a palavra "then" faz em case/when?', answer: 'permite escrever em uma linha', hint: 'É opcional, mas compacta o código', difficulty: 'dificil' }
    ]
  },
  {
    id: 'loops',
    title: 'Loops & Enumerações',
    number: 6,
    level: 'basico',
    category: 'basico',
    description: 'while, until, for, each, times, loop, break, next, redo — domine a iteração.',
    topics: ['while', 'until', 'for', 'each', 'times', 'loop', 'break/next/redo'],
    icon: '🔄',
    docs: ['https://ruby-doc.org/core-3.0.0/doc/syntax/control_expressions_rdoc.html'],
    sections: [
      {
        title: 'while',
        type: 'text',
        content: `<p><code>while</code> executa um bloco ENQUANTO a condição for verdadeira.</p>`
      },
      {
        title: 'Exemplo: while',
        type: 'code',
        lang: 'ruby',
        code: `contador = 0

while contador < 5
  puts "Contador: \#{contador}"
  contador += 1
end

# while modificador
contador = 0
puts contador += 1 while contador < 3`,
        comment: 'Cuidado com loops infinitos!'
      },
      {
        title: 'until',
        type: 'text',
        content: `<p><code>until</code> é o oposto de while — executa ATÉ que a condição seja verdadeira.</p>`
      },
      {
        title: 'Exemplo: until',
        type: 'code',
        lang: 'ruby',
        code: `contador = 0

until contador >= 5
  puts "Contador: \#{contador}"
  contador += 1
end

# until modificador
contador = 0
puts contador += 1 until contador >= 3`,
        comment: 'until é equivalente a "while not"'
      },
      {
        title: 'each — O Rei das Iterações',
        type: 'text',
        content: `<p><code>each</code> é o método mais usado para iterar em coleções. Em Ruby, prefira each a for.</p>`
      },
      {
        title: 'Exemplo: each',
        type: 'code',
        lang: 'ruby',
        code: `# each em arrays
[1, 2, 3].each do |n|
  puts n * 2
end

# each em uma linha
[1, 2, 3].each { |n| puts n * 2 }

# each em hashes
{ nome: "Ana", idade: 30 }.each do |chave, valor|
  puts "\#{chave}: \#{valor}"
end

# each com índice
["a", "b", "c"].each_with_index do |item, i|
  puts "\#{i}: \#{item}"
end`,
        comment: 'Prefira {} para blocos de uma linha e do/end para múltiplas linhas'
      },
      {
        title: 'times',
        type: 'text',
        content: `<p><code>times</code> executa um bloco um número específico de vezes.</p>`
      },
      {
        title: 'Exemplo: times',
        type: 'code',
        lang: 'ruby',
        code: `# Executa 3 vezes
3.times { puts "Ruby!" }

# Com contador
3.times { |i| puts "Iteração \#{i}" }

# Diversão com times
5.times { print "*" }  # *****`,
        comment: 'times começa a contar do 0'
      },
      {
        title: 'for',
        type: 'text',
        content: `<p><code>for</code> existe, mas em Ruby prefira <code>each</code>. A diferença é que <code>for</code> não cria um novo escopo.</p>`
      },
      {
        title: 'Exemplo: for',
        type: 'code',
        lang: 'ruby',
        code: `# for em array
for fruta in ["maçã", "banana", "laranja"]
  puts fruta
end

# for com range
for i in 1..5
  puts i
end

# Diferença importante: for não cria escopo
for i in [1, 2, 3]
  # ...
end
puts i  # 3 — i ainda existe aqui!

# Já com each:
[1, 2, 3].each { |j| }
puts j  # NameError — j não existe fora do bloco!`,
        comment: 'Prefira each por criar um escopo fechado (melhor prática)'
      },
      {
        title: 'loop, break, next, redo',
        type: 'text',
        content: `<p><code>loop</code> é um loop infinito controlado. Use <code>break</code> para sair, <code>next</code> para pular, <code>redo</code> para repetir.</p>`
      },
      {
        title: 'Exemplo: Controle de Fluxo',
        type: 'code',
        lang: 'ruby',
        code: `# loop com break
loop do
  puts "Infinito?"
  break  # sai do loop
end

# next — pula para próxima iteração
(1..5).each do |n|
  next if n.even?
  puts n  # 1, 3, 5
end

# redo — repete a iteração atual
tentativas = 0
loop do
  tentativas += 1
  puts "Tentativa \#{tentativas}"
  redo if tentativas < 3  # repete até 3
  break
end`,
        comment: 'Use next para filtrar elementos, break para sair do loop'
      },
      {
        title: 'Resumo',
        type: 'info',
        style: 'tip',
        icon: '📌',
        content: 'Prefira <code>each</code> para iterar coleções, <code>times</code> para repetições numéricas, <code>while/until</code> para loops condicionais. Use <code>break</code>, <code>next</code> e <code>redo</code> para controle fino.'
      },
      {
        title: 'Erros Comuns',
        type: 'info',
        style: 'error-box',
        icon: '⚠️',
        content: '<strong>Loop infinito:</strong> esquecer de incrementar a variável de controle no while. <strong>Usar for em vez de each:</strong> for não cria escopo, o que pode causar bugs. <strong>Modificar array durante each:</strong> pode causar comportamento inesperado.'
      },
      {
        title: 'Boas Práticas',
        type: 'info',
        style: 'info',
        icon: '💡',
        content: '<strong>Prefira each a for.</strong> <strong>Use next para early return</strong> dentro de loops. <strong>Use break com valor</strong> para retornar do loop: result = loop { break 42 }. <strong>Evite redo</strong> — pode criar loops confusos.'
      }
    ],
    exercises: [
      { id: 'loop-ex1', question: 'Qual método itera sobre cada elemento de um array?', answer: 'each', hint: 'É o mais comum em Ruby', difficulty: 'facil' },
      { id: 'loop-ex2', question: 'Qual palavra-chave sai de um loop?', answer: 'break', hint: 'Mesmo termo usado em outras linguagens', difficulty: 'facil' },
      { id: 'loop-ex3', question: 'Qual método executa um bloco N vezes?', answer: 'times', hint: 'É chamado em um número', difficulty: 'facil' },
      { id: 'loop-ex4', question: 'Qual palavra pula para a próxima iteração sem sair do loop?', answer: 'next', hint: 'Mesmo que em inglês', difficulty: 'medio' },
      { id: 'loop-ex5', question: 'Qual estrutura executa ATÉ que a condição seja verdadeira?', answer: 'until', hint: 'Opõe de while', difficulty: 'medio' },
      { id: 'loop-ex6', question: 'Qual a diferença entre each e for em relação a escopo?', answer: 'for não cria escopo', hint: 'Variáveis dentro de for vazam para fora', difficulty: 'dificil' }
    ]
  },
  {
    id: 'metodos',
    title: 'Métodos',
    number: 7,
    level: 'intermediario',
    category: 'intermediario',
    description: 'Defina métodos, trabalhe com parâmetros, entenda escopo e encadeie chamadas.',
    topics: ['def/end', 'Parâmetros', 'Return', 'Escopo', 'Method Chaining'],
    icon: '⚙️',
    docs: ['https://ruby-doc.org/core-3.0.0/doc/syntax/methods_rdoc.html'],
    sections: [
      {
        title: 'Definindo Métodos',
        type: 'text',
        content: `<p>Métodos são definidos com <code>def</code> e fechados com <code>end</code>. O último valor avaliado é retornado automaticamente.</p>`
      },
      {
        title: 'Exemplo: Métodos',
        type: 'code',
        lang: 'ruby',
        code: `# Método simples
def diga_ola
  "Olá, mundo!"
end

puts diga_ola  # Olá, mundo!

# Método com parâmetros
def soma(a, b)
  a + b  # último valor = retorno automático
end

puts soma(3, 4)  # 7

# return explícito
def maior(a, b)
  return a if a > b
  b
end

puts maior(10, 5)  # 10`,
        comment: 'Em Ruby, return é implícito (última expressão avaliada)'
      },
      {
        title: 'Parâmetros: Padrão, Nomeados e Splat',
        type: 'text',
        content: `<p>Ruby oferece várias formas flexíveis de parâmetros:</p>`
      },
      {
        title: 'Exemplo: Parâmetros Flexíveis',
        type: 'code',
        lang: 'ruby',
        code: `# Valor padrão
def cumprimentar(nome = "mundo")
  "Olá, \#{nome}!"
end

puts cumprimentar       # Olá, mundo!
puts cumprimentar("Ana") # Olá, Ana!

# Parâmetros nomeados (keyword arguments)
def criar_usuario(nome:, email:, idade: nil)
  "Usuário: \#{nome}, Email: \#{email}"
end

criar_usuario(nome: "João", email: "joao@email.com")

# Splat (*) — número variável de argumentos
def lista(*itens)
  itens.join(", ")
end

puts lista(1, 2, 3, 4)          # 1, 2, 3, 4
puts lista("a", "b")            # a, b

# Double splat (**) — hash de keyword args
def configurar(**opcoes)
  opcoes.each { |k, v| puts "\#{k}: \#{v}" }
end

configurar(db: "postgres", port: 5432)`,
        comment: 'Keyword arguments (nome:) são preferíveis a hashes para APIs'
      },
      {
        title: 'Escopo de Métodos',
        type: 'text',
        content: `<p>Métodos definidos fora de uma classe são métodos privados de Object (métodos "globais"). Dentro de classes, controlamos visibilidade.</p>`
      },
      {
        title: 'Exemplo: Escopo',
        type: 'code',
        lang: 'ruby',
        code: `# Método "global" (disponível em qualquer lugar)
def saudacao
  "Olá!"
end

puts saudacao  # Olá!

# Dentro de classe
class Calculadora
  def somar(a, b)
    a + b
  end

  private

  def log(mensagem)
    puts "[LOG] \#{mensagem}"
  end
end`,
        comment: 'Defina métodos auxiliares como private dentro da classe'
      },
      {
        title: 'Method Chaining (Encadeamento)',
        type: 'text',
        content: `<p>Ruby incentiva encadeamento de métodos. Para funcionar, cada método deve retornar um objeto que responda ao próximo método.</p>`
      },
      {
        title: 'Exemplo: Method Chaining',
        type: 'code',
        lang: 'ruby',
        code: `# Encadeamento nativo
"ruby".upcase.reverse  # "YBUR"

# Array chaining
[3, 1, 4, 1, 5]
  .sort
  .reverse
  .map { |n| n * 2 }
  .select { |n| n > 5 }
  # => [10, 8, 6]

# Criando métodos encadeáveis
class Texto
  def initialize(texto)
    @texto = texto
  end

  def maiusculo
    @texto = @texto.upcase
    self  # retorna self para permitir encadeamento
  end

  def reverso
    @texto = @texto.reverse
    self
  end

  def resultado
    @texto
  end
end

puts Texto.new("ruby").maiusculo.reverso.resultado
# YBUR`,
        comment: 'Sempre retorne self em métodos mutáveis para permitir chaining'
      },
      {
        title: 'Resumo',
        type: 'info',
        style: 'tip',
        icon: '📌',
        content: 'Métodos em Ruby têm retorno implícito, suportam parâmetros nomeados, splat (*) e valores padrão. Encadeamento funciona retornando self.'
      },
      {
        title: 'Erros Comuns',
        type: 'info',
        style: 'error-box',
        icon: '⚠️',
        content: '<strong>ArgumentError:</strong> número errado de argumentos. <strong>LocalJumpError:</strong> return dentro de bloco pode causar erro. <strong>Esquecer que return é opcional:</strong> a última expressão é sempre retornada.'
      },
      {
        title: 'Boas Práticas',
        type: 'info',
        style: 'info',
        icon: '💡',
        content: '<strong>Prefira retorno implícito.</strong> <strong>Use keyword arguments</strong> para métodos com 3+ parâmetros. <strong>Não use parênteses desnecessariamente:</strong> puts "oi" é ok, mas use parênteses em chamadas ambíguas.'
      }
    ],
    exercises: [
      { id: 'met-ex1', question: 'Qual palavra define um método?', answer: 'def', hint: '3 letras', difficulty: 'facil' },
      { id: 'met-ex2', question: 'Qual palavra fecha a definição de um método?', answer: 'end', hint: '3 letras também', difficulty: 'facil' },
      { id: 'met-ex3', question: 'Em Ruby, o retorno de um método é...?', answer: 'implícito', hint: 'Não precisa escrever return', difficulty: 'medio' },
      { id: 'met-ex4', question: 'Qual símbolo permite número variável de argumentos?', answer: '*', hint: 'Também chamado de "splat"', difficulty: 'medio' },
      { id: 'met-ex5', question: 'O que um método deve retornar para permitir encadeamento?', answer: 'self', hint: 'Referência ao próprio objeto', difficulty: 'medio' },
      { id: 'met-ex6', question: 'Qual tipo de parâmetro usa a sintaxe nome: em vez de posição?', answer: 'keyword argument', hint: 'Também chamado de argumento nomeado', difficulty: 'dificil' }
    ]
  },
  {
    id: 'blocos-procs-lambdas',
    title: 'Blocos, Procs e Lambdas',
    number: 8,
    level: 'intermediario',
    category: 'intermediario',
    description: 'Entenda blocos anônimos, Procs e Lambdas — poderosas ferramentas funcionais do Ruby.',
    topics: ['Blocos', 'Procs', 'Lambdas', 'yield', '&block'],
    icon: '📦',
    docs: ['https://ruby-doc.org/core-3.0.0/doc/syntax/methods_rdoc.html'],
    sections: [
      {
        title: 'Blocos',
        type: 'text',
        content: `<p>Blocos são pedaços de código que podem ser passados para métodos. São a base da funcionalidade de iteração em Ruby.</p>`
      },
      {
        title: 'Exemplo: Blocos',
        type: 'code',
        lang: 'ruby',
        code: `# Bloco com {}
[1, 2, 3].each { |n| puts n }

# Bloco com do/end
[1, 2, 3].each do |n|
  puts n * 2
end

# yield — chama o bloco recebido
def executar
  puts "Antes do bloco"
  yield if block_given?
  puts "Depois do bloco"
end

executar { puts "Dentro do bloco!" }

# yield com argumentos
def saudacao
  yield("Ruby", 30)
end

saudacao { |nome, idade| puts "\#{nome} tem \#{idade} anos" }`,
        comment: 'Use {} para blocos de uma linha, do/end para múltiplas linhas'
      },
      {
        title: 'Procs',
        type: 'text',
        content: `<p>Um Proc é um bloco "salvo" em um objeto. Pode ser armazenado e reutilizado.</p>`
      },
      {
        title: 'Exemplo: Procs',
        type: 'code',
        lang: 'ruby',
        code: `# Criando um Proc
dobro = Proc.new { |n| n * 2 }
puts dobro.call(5)  # 10

# Sintaxe alternativa
triplo = proc { |n| n * 3 }
puts triplo.call(3)  # 9

# Proc com default
saudacao = Proc.new { |nome = "mundo"| "Olá, \#{nome}!" }
puts saudacao.call        # Olá, mundo!
puts saudacao.call("Ana") # Olá, Ana!

# Convertendo bloco para Proc (&)
def executar_proc(&bloco)
  bloco.call("Ruby")
end

executar_proc { |lang| puts "Aprendendo \#{lang}!" }

# Array de Procs
operacoes = [
  Proc.new { |n| n + 1 },
  Proc.new { |n| n * 2 },
  Proc.new { |n| n ** 2 },
]
puts operacoes.map { |op| op.call(5) }  # [6, 10, 25]`,
        comment: 'Use & para converter bloco em Proc e vice-versa'
      },
      {
        title: 'Lambdas',
        type: 'text',
        content: `<p>Lambdas são similares a Procs, mas com duas diferenças importantes: verificam número de argumentos e tratam return de forma diferente.</p>`
      },
      {
        title: 'Exemplo: Lambdas',
        type: 'code',
        lang: 'ruby',
        code: `# Criando um lambda
dobro = lambda { |n| n * 2 }
puts dobro.call(5)  # 10

# Sintaxe alternativa (estável)
triplo = ->(n) { n * 3 }
puts triplo.call(3)  # 9

# Diferença 1: Lambda verifica argumentos!
proc_ex = Proc.new { |a, b| [a, b] }
lambda_ex = ->(a, b) { [a, b] }

puts proc_ex.call(1)       # [1, nil] — funciona
# lambda_ex.call(1)        # ArgumentError!

# Diferença 2: return no lambda volta pro escopo
# return no Proc volta do método que o chamou!
def testar
  p = Proc.new { return "saindo do método!" }
  l = -> { return "saindo do lambda!" }

  resultado_lambda = l.call
  puts resultado_lambda  # saindo do lambda!

  resultado_proc = p.call
  puts resultado_proc    # nunca executa!
end

testar`,
        comment: 'Lambdas são mais "seguros" — se comportam como métodos'
      },
      {
        title: 'Resumo',
        type: 'info',
        style: 'tip',
        icon: '📌',
        content: 'Blocos são código anônimo passado para métodos. Procs são blocos "objetos". Lambdas são Procs que verificam argumentos e tratam return como métodos.'
      },
      {
        title: 'Erros Comuns',
        type: 'info',
        style: 'error-box',
        icon: '⚠️',
        content: '<strong>Usar return dentro de Proc:</strong> pode sair do método inesperadamente. <strong>Não verificar block_given?</strong> antes de yield. <strong>Confundir Proc com Lambda</strong> — comportamento de argumentos é diferente.'
      },
      {
        title: 'Boas Práticas',
        type: 'info',
        style: 'info',
        icon: '💡',
        content: '<strong>Prefira lambdas a procs</strong> — comportamento mais previsível. <strong>Sempre use block_given?</strong> antes de yield. <strong>Use & no final dos parâmetros</strong> para capturar blocos.'
      }
    ],
    exercises: [
      { id: 'bloc-ex1', question: 'Qual palavra-chave executa um bloco recebido?', answer: 'yield', hint: 'Significa "ceder" em inglês', difficulty: 'facil' },
      { id: 'bloc-ex2', question: 'Qual classe representa blocos como objetos?', answer: 'Proc', hint: 'Começa com P', difficulty: 'facil' },
      { id: 'bloc-ex3', question: 'Qual símbolo converte bloco para Proc?', answer: '&', hint: 'E comercial', difficulty: 'medio' },
      { id: 'bloc-ex4', question: 'Qual a sintaxe estável para criar lambda: ->(n) { } ou lambda { |n| }?', answer: '->(n) { }', hint: 'Usa o símbolo de flecha', difficulty: 'medio' },
      { id: 'bloc-ex5', question: 'Qual tipo (Proc ou Lambda) verifica o número de argumentos?', answer: 'Lambda', hint: 'O mais seguro dos dois', difficulty: 'medio' },
      { id: 'bloc-ex6', question: 'Qual método verifica se um bloco foi passado?', answer: 'block_given?', hint: 'Tem ? no final', difficulty: 'dificil' }
    ]
  },
  {
    id: 'oo-ruby',
    title: 'Orientação a Objetos',
    number: 9,
    level: 'intermediario',
    category: 'intermediario',
    description: 'Classes, objetos, encapsulamento, herança e polimorfismo — OOP puro em Ruby.',
    topics: ['Classes', 'Objetos', 'attr_accessor', 'Herança', 'Polimorfismo', 'SOLID'],
    icon: '🏛️',
    docs: ['https://ruby-doc.org/core-3.0.0/doc/syntax/classes_and_modules_rdoc.html'],
    sections: [
      {
        title: 'Classes e Objetos',
        type: 'text',
        content: `<p>Tudo em Ruby é objeto. Classes são "fábricas" de objetos. O construtor é o método <code>initialize</code>.</p>`
      },
      {
        title: 'Exemplo: Classes',
        type: 'code',
        lang: 'ruby',
        code: `class Pessoa
  def initialize(nome, idade)
    @nome = nome  # variável de instância
    @idade = idade
  end

  def apresentar
    "Olá, meu nome é \#{@nome} e tenho \#{@idade} anos"
  end
end

pessoa = Pessoa.new("Ana", 25)
puts pessoa.apresentar
# Olá, meu nome é Ana e tenho 25 anos`,
        comment: 'new chama initialize automaticamente'
      },
      {
        title: 'attr_accessor — Getters/Setters Automáticos',
        type: 'text',
        content: `<p>Ruby fornece atalhos para criar getters e setters:</p>`
      },
      {
        title: 'Exemplo: attr_accessor',
        type: 'code',
        lang: 'ruby',
        code: `class Produto
  # Cria getter e setter
  attr_accessor :nome, :preco

  # Cria apenas getter (leitura)
  attr_reader :codigo

  # Cria apenas setter (escrita)
  attr_writer :desconto

  def initialize(nome, preco, codigo)
    @nome = nome
    @preco = preco
    @codigo = codigo
  end

  def preco_com_desconto
    @preco * (1 - (@desconto || 0))
  end
end

p = Produto.new("Notebook", 3500, "NB001")
puts p.nome          # Notebook — attr_accessor
puts p.codigo        # NB001 — attr_reader (só leitura)
p.preco = 3200      # attr_accessor permite alterar
puts p.preco         # 3200`,
        comment: 'Prefira attr_reader para dados imutáveis'
      },
      {
        title: 'Herança',
        type: 'text',
        content: `<p>Ruby suporta herança simples com <code><</code>. Uma classe filha herda tudo da classe pai.</p>`
      },
      {
        title: 'Exemplo: Herança',
        type: 'code',
        lang: 'ruby',
        code: `class Animal
  def initialize(nome)
    @nome = nome
  end

  def fazer_som
    "Som genérico"
  end

  def dormir
    "\#{@nome} está dormindo"
  end
end

class Cachorro < Animal
  def fazer_som
    "Au au!"
  end
end

class Gato < Animal
  def fazer_som
    "Miau!"
  end
end

rex = Cachorro.new("Rex")
puts rex.fazer_som   # Au au!
puts rex.dormir      # Rex está dormindo (herdado!)

mingau = Gato.new("Mingau")
puts mingau.fazer_som # Miau!`,
        comment: 'Use super para chamar o método da classe pai'
      },
      {
        title: 'Polimorfismo',
        type: 'text',
        content: `<p>Polimorfismo permite que objetos diferentes respondam ao mesmo método de formas diferentes.</p>`
      },
      {
        title: 'Exemplo: Polimorfismo',
        type: 'code',
        lang: 'ruby',
        code: `# Duck Typing — "se anda como pato..."
def fazer_animal_som(animal)
  animal.fazer_som
end

puts fazer_animal_som(Cachorro.new("Rex"))  # Au au!
puts fazer_animal_som(Gato.new("Mingau"))   # Miau!

# Polimorfismo com módulos
module Voador
  def voar
    "\#{self.class} está voando!"
  end
end

class Passaro < Animal
  include Voador
  def fazer_som
    "Piu piu!"
  end
end

passaro = Passaro.new("Piu")
puts passaro.voar      # Passaro está voando!
puts passaro.fazer_som # Piu piu!`,
        comment: 'Ruby usa Duck Typing — se responde ao método, funciona'
      },
      {
        title: 'SOLID em Ruby',
        type: 'text',
        content: `<p>Os princípios SOLID se aplicam perfeitamente ao Ruby:</p>
        <ul>
          <li><strong>S</strong> — Single Responsibility: cada classe deve ter apenas uma razão para mudar</li>
          <li><strong>O</strong> — Open/Closed: aberta para extensão, fechada para modificação</li>
          <li><strong>L</strong> — Liskov Substitution: subtipos devem poder substituir seus tipos base</li>
          <li><strong>I</strong> — Interface Segregation: interfaces específicas são melhores que uma geral</li>
          <li><strong>D</strong> — Dependency Inversion: dependa de abstrações, não de implementações</li>
        </ul>`
      },
      {
        title: 'Exemplo: SOLID na prática',
        type: 'code',
        lang: 'ruby',
        code: `# Ruim: classe faz tudo
class Relatorio
  def gerar_dados; end
  def formatar_html; end
  def enviar_email; end
end

# Bom: cada classe tem uma responsabilidade
class ColetorDados
  def coletar; end
end

class FormatadorHtml
  def formatar(dados); end
end

class ServicoEmail
  def enviar(relatorio); end
end

# Dependency Injection
class GeradorRelatorio
  def initialize(coletor, formatador, servico_email)
    @coletor = coletor
    @formatador = formatador
    @servico_email = servico_email
  end

  def executar
    dados = @coletor.coletar
    relatorio = @formatador.formatar(dados)
    @servico_email.enviar(relatorio)
  end
end`,
        comment: 'Injeção de dependência é uma prática comum em Ruby/Rails'
      },
      {
        title: 'Encapsulamento: public, private, protected',
        type: 'text',
        content: '<p>Encapsulamento esconde a implementação interna e expõe apenas o necessário. Ruby controla visibilidade com três palavras-chave:</p><ul><li><code>public</code> — qualquer um pode chamar (padrão)</li><li><code>private</code> — só o próprio objeto pode chamar (nem com receiver explícito)</li><li><code>protected</code> — pode ser chamado por outros objetos da mesma classe</li></ul>',
      },
      {
        title: 'Exemplo: Controle de Acesso',
        type: 'code',
        lang: 'ruby',
        code: `class ContaBancaria
  def initialize(saldo)
    @saldo = saldo
  end

  # Público — qualquer um pode chamar
  def exibir_saldo
    "Saldo: R$ #{formatar(@saldo)}"
  end

  def transferir(quantia, outra_conta)
    if saldo_suficiente?(quantia)
      @saldo -= quantia
      outra_conta.depositar(quantia)
      true
    else
      false
    end
  end

  protected

  # Protected — outra ContaBancaria pode chamar
  def depositar(quantia)
    @saldo += quantia
  end

  private

  # Private — só usado internamente
  def saldo_suficiente?(quantia)
    @saldo >= quantia
  end

  def formatar(valor)
    format("%.2f", valor)
  end
end

conta1 = ContaBancaria.new(1000)
conta2 = ContaBancaria.new(500)
puts conta1.exibir_saldo        # Saldo: R$ 1000.00
conta1.transferir(300, conta2)
puts conta1.exibir_saldo        # Saldo: R$ 700.00

# conta1.saldo_suficiente?(50)  # NoMethodError — private!`,
        comment: 'Use private para detalhes internos, protected para interação entre objetos da mesma classe',
      },
      {
        title: 'Abstração',
        type: 'text',
        content: '<p>Abstração significa esconder complexidade e expor apenas o essencial. Em Ruby, não há classes abstratas formais, mas simulamos com métodos que levantam <code>NotImplementedError</code>.</p>',
      },
      {
        title: 'Exemplo: Abstração',
        type: 'code',
        lang: 'ruby',
        code: `# Classe "abstrata" simulada
class Animal
  def fazer_som
    raise NotImplementedError,
          "#{self.class} deve implementar #fazer_som"
  end

  def dormir
    "Zzzz..."
  end
end

class Cachorro < Animal
  def fazer_som
    "Au au!"
  end
end

class Gato < Animal
  def fazer_som
    "Miau!"
  end
end

# animal = Animal.new
# animal.fazer_som  # NotImplementedError!

rex = Cachorro.new
puts rex.fazer_som   # Au au!
puts rex.dormir      # Zzzz...`,
        comment: 'Simule abstração com raise NotImplementedError em métodos que devem ser sobrescritos',
      },
      {
        title: 'Composição vs Herança',
        type: 'text',
        content: '<p><strong>Composição</strong> ("tem um") é preferível a <strong>Herança</strong> ("é um") na maioria dos casos. Composição é mais flexível e menos acoplada.</p>',
      },
      {
        title: 'Exemplo: Composição',
        type: 'code',
        lang: 'ruby',
        code: `# HERANÇA — frágil e acoplada
class Relatorio
  def gerar
    cabecalho + corpo + rodape
  end

  def cabecalho
    "=== Relatório ===\n"
  end

  def corpo
    raise NotImplementedError
  end

  def rodape
    "\n=== Fim ==="
  end
end

class RelatorioPDF < Relatorio
  def corpo
    "Conteúdo em PDF"
  end
end

# COMPOSIÇÃO — flexível e desacoplada
class GeradorRelatorio
  def initialize(formatador)
    @formatador = formatador  # "tem um" formatador
  end

  def gerar(conteudo)
    cabecalho = "=== Relatório ===\n"
    rodape = "\n=== Fim ==="
    cabecalho + @formatador.formatar(conteudo) + rodape
  end
end

class FormatadorPDF
  def formatar(conteudo)
    "[PDF] #{conteudo}"
  end
end

class FormatadorHTML
  def formatar(conteudo)
    "<p>#{conteudo}</p>"
  end
end

# Fácil de trocar comportamento!
relatorio = GeradorRelatorio.new(FormatadorPDF.new)
puts relatorio.gerar("Dados importantes")

relatorio_html = GeradorRelatorio.new(FormatadorHTML.new)
puts relatorio_html.gerar("Dados importantes")`,
        comment: 'Prefira composição: injete dependências em vez de herdar comportamentos',
      },
      {
        title: 'Métodos de Classe e Singleton',
        type: 'text',
        content: '<p>Métodos de classe (definidos com <code>self.metodo</code>) pertencem à classe, não às instâncias. O padrão Singleton garante uma única instância global.</p>',
      },
      {
        title: 'Exemplo: Métodos de Classe',
        type: 'code',
        lang: 'ruby',
        code: `class Configuracao
  @@valores = {}

  # Método de classe
  def self.set(chave, valor)
    @@valores[chave] = valor
  end

  def self.get(chave)
    @@valores[chave]
  end

  # Singleton com método de classe
  private_class_method :new

  def self.instance
    @instance ||= new
  end

  def initialize
    @config = {}
  end

  def [](chave)
    @config[chave]
  end

  def []=(chave, valor)
    @config[chave] = valor
  end
end

# Métodos de classe
Configuracao.set(:db, "postgres")
puts Configuracao.get(:db)  # postgres

# Singleton
cfg1 = Configuracao.instance
cfg2 = Configuracao.instance
cfg1[:timeout] = 30
puts cfg2[:timeout]  # 30 — mesma instância!
puts cfg1.equal?(cfg2)  # true`,
        comment: 'Use singleton para configurações globais, loggers e pools de conexão',
      },
      {
        title: 'Duck Typing na Prática',
        type: 'text',
        content: '<p>"Se anda como pato e nada como pato, é um pato." Em Ruby, não importa a classe do objeto, importa se ele responde ao método. Isso é Duck Typing.</p>',
      },
      {
        title: 'Exemplo: Duck Typing',
        type: 'code',
        lang: 'ruby',
        code: `# Duck Typing — nenhuma herança necessária!
class Pato
  def fazer_som
    "Quack!"
  end
end

class Pessoa
  def fazer_som
    "Olá!"
  end
end

class Computador
  def fazer_som
    "Beep!"
  end
end

# A função não se importa com a classe!
def fazer_barulho(objeto)
  puts objeto.fazer_som
end

fazer_barulho(Pato.new)        # Quack!
fazer_barulho(Pessoa.new)      # Olá!
fazer_barulho(Computador.new)  # Beep!

# Verificando se responde ao método
def fazer_barulho_seguro(objeto)
  if objeto.respond_to?(:fazer_som)
    puts objeto.fazer_som
  else
    puts "Não sei fazer som!"
  end
end

class Pedra; end
fazer_barulho_seguro(Pedra.new)  # Não sei fazer som!`,
        comment: 'Use respond_to? para verificar se um objeto responde a um método antes de chamá-lo',
      },
      {
        title: 'Resumo',
        type: 'info',
        style: 'tip',
        icon: '📌',
        content: 'Ruby é puramente OO. Use classes, herança (<), módulos (include), attr_accessor e Duck Typing. SOLID torna o código manutenível.'
      },
      {
        title: 'Erros Comuns',
        type: 'info',
        style: 'error-box',
        icon: '⚠️',
        content: '<strong>Herança excessiva:</strong> prefira composição a herança. <strong>attr_accessor para tudo:</strong> quebra encapsulamento. <strong>Esquecer initialize:</strong> o objeto é criado sem estado.'
      },
      {
        title: 'Boas Práticas',
        type: 'info',
        style: 'info',
        icon: '💡',
        content: '<strong>Use attr_reader por padrão,</strong> só use attr_accessor se precisar. <strong>Prefira módulos a herança</strong> para compartilhar comportamento. <strong>Injete dependências</strong> em vez de instanciar dentro da classe.'
      }
    ],
    exercises: [
      { id: 'oo-ex1', question: 'Qual método é o construtor de uma classe?', answer: 'initialize', hint: 'Começa com "init"', difficulty: 'facil' },
      { id: 'oo-ex2', question: 'Qual palavra importa um módulo em uma classe?', answer: 'include', hint: 'Significa "incluir"', difficulty: 'facil' },
      { id: 'oo-ex3', question: 'Qual símbolo indica herança em Ruby?', answer: '<', hint: 'Sinal de menor', difficulty: 'facil' },
      { id: 'oo-ex4', question: 'Qual atalho cria getter e setter?', answer: 'attr_accessor', hint: 'attr_ + ___', difficulty: 'medio' },
      { id: 'oo-ex5', question: 'Qual termo descreve "se responde ao método, funciona"?', answer: 'Duck Typing', hint: 'Tipo de pato 🦆', difficulty: 'medio' },
      { id: 'oo-ex6', question: 'Quantos princípios existem no SOLID?', answer: '5', hint: 'Cada letra é um princípio', difficulty: 'facil' }
    ]
  },
  {
    id: 'enumerables',
    title: 'Enumerable',
    number: 10,
    level: 'intermediario',
    category: 'intermediario',
    description: 'O poderoso módulo Enumerable: map, select, reduce, sort e muito mais.',
    topics: ['map/collect', 'select/filter', 'reduce/inject', 'sort', 'group_by', 'partition'],
    icon: '🔍',
    docs: ['https://ruby-doc.org/core-3.0.0/Enumerable.html'],
    sections: [
      {
        title: 'O Módulo Enumerable',
        type: 'text',
        content: `<p><code>Enumerable</code> é um dos módulos mais poderosos do Ruby. Ele fornece dezenas de métodos de iteração, busca e filtragem.</p>
        <p>Qualquer classe que implemente <code>each</code> pode incluir Enumerable e ganhar todos esses métodos gratuitamente!</p>`
      },
      {
        title: 'map/collect',
        type: 'text',
        content: `<p><code>map</code> transforma cada elemento de uma coleção e retorna um novo array.</p>`
      },
      {
        title: 'Exemplo: map',
        type: 'code',
        lang: 'ruby',
        code: `# map transforma elementos
numeros = [1, 2, 3, 4, 5]
dobrados = numeros.map { |n| n * 2 }
puts dobrados  # [2, 4, 6, 8, 10]

# collect é sinônimo de map
maiusculas = ["ruby", "rails"].collect(&:upcase)
puts maiusculas  # ["RUBY", "RAILS"]

# map com &:method (atalho super útil)
puts [1, 2, 3].map(&:to_s)   # ["1", "2", "3"]
puts ["a", "b"].map(&:upcase)  # ["A", "B"]

# map em hashes
hash = { a: 1, b: 2, c: 3 }
puts hash.map { |k, v| "\#{k}: \#{v * 2}" }
# ["a: 2", "b: 4", "c: 6"]`,
        comment: 'O atalho &:method é equivalente a { |x| x.method }'
      },
      {
        title: 'select/reject',
        type: 'text',
        content: `<p><code>select</code> filtra elementos que satisfazem uma condição. <code>reject</code> é o oposto.</p>`
      },
      {
        title: 'Exemplo: select/reject',
        type: 'code',
        lang: 'ruby',
        code: `numeros = [1, 2, 3, 4, 5, 6]

pares = numeros.select { |n| n.even? }
puts pares  # [2, 4, 6]

impares = numeros.reject { |n| n.even? }
puts impares  # [1, 3, 5]

# select com &:method
puts [1, 2, 3, 4].select(&:even?)  # [2, 4]

# filter é sinônimo de select (Ruby 2.6+)
puts [1, 2, 3].filter(&:odd?)  # [1, 3]

# find_all também é sinônimo
puts [1, 2, 3].find_all { |n| n > 1 }  # [2, 3]`,
        comment: 'select retorna todos que satisfazem, find retorna apenas o primeiro'
      },
      {
        title: 'reduce/inject',
        type: 'text',
        content: `<p><code>reduce</code> (ou <code>inject</code>) acumula valores ao iterar — extremamente versátil.</p>`
      },
      {
        title: 'Exemplo: reduce/inject',
        type: 'code',
        lang: 'ruby',
        code: `# Soma (com valor inicial 0)
soma = [1, 2, 3, 4, 5].reduce(0) { |acc, n| acc + n }
puts soma  # 15

# Produto
produto = [1, 2, 3, 4].reduce(1) { |acc, n| acc * n }
puts produto  # 24

# Sem valor inicial (usa o primeiro elemento)
soma = [1, 2, 3].reduce { |acc, n| acc + n }
puts soma # 6

# inject é sinônimo
puts [1, 2, 3].inject(:+)  # 6 — usando symbol do método

# Caso real: agrupar
frutas = ["maçã", "banana", "maçã", "laranja", "banana", "maçã"]
contagem = frutas.reduce(Hash.new(0)) do |acc, fruta|
  acc[fruta] += 1
  acc
end
puts contagem  # {"maçã"=>3, "banana"=>2, "laranja"=>1}`,
        comment: 'reduce(:+) é um atalho para reduce { |a, b| a + b }'
      },
      {
        title: 'sort & sort_by',
        type: 'text',
        content: `<p>Métodos de ordenação do Enumerable:</p>`
      },
      {
        title: 'Exemplo: Ordenação',
        type: 'code',
        lang: 'ruby',
        code: `# sort simples
puts [3, 1, 4, 1, 5].sort  # [1, 1, 3, 4, 5]

# sort com bloco
puts [3, 1, 4].sort { |a, b| b <=> a }  # [4, 3, 1] — decrescente

# sort_by (mais prático!)
pessoas = [
  { nome: "Ana", idade: 30 },
  { nome: "João", idade: 25 },
  { nome: "Zeca", idade: 35 },
]

# Ordenar por idade
puts pessoas.sort_by { |p| p[:idade] }
# [{nome: "João"...}, {nome: "Ana"...}, {nome: "Zeca"...}]

# Ordenar por nome
puts pessoas.sort_by { |p| p[:nome] }`,
        comment: 'sort_by é mais eficiente que sort com bloco'
      },
      {
        title: 'group_by & partition',
        type: 'text',
        content: `<p>Agrupe e divida coleções:</p>`
      },
      {
        title: 'Exemplo: group_by & partition',
        type: 'code',
        lang: 'ruby',
        code: `# group_by — agrupa por condição
numeros = [1, 2, 3, 4, 5, 6]
grupos = numeros.group_by { |n| n.even? ? "par" : "ímpar" }
puts grupos
# {"ímpar"=>[1, 3, 5], "par"=>[2, 4, 6]}

# partition — divide em dois arrays
pares, impares = numeros.partition(&:even?)
puts pares   # [2, 4, 6]
puts impares # [1, 3, 5]

# Uso prático: agrupar por tamanho
palavras = ["ruby", "python", "java", "rust", "elixir"]
por_tamanho = palavras.group_by(&:length)
# {4=>["ruby", "java", "rust"], 6=>["python", "elixir"]}`,
        comment: 'partition retorna dois arrays: [true_array, false_array]'
      },
      {
        title: 'Outros Métodos Úteis',
        type: 'text',
        content: `<p>Enumerable tem dezenas de métodos. Alguns essenciais:</p>
        <ul>
          <li><code>any?</code> — algum elemento satisfaz?</li>
          <li><code>all?</code> — todos satisfazem?</li>
          <li><code>none?</code> — nenhum satisfaz?</li>
          <li><code>one?</code> — exatamente um satisfaz?</li>
          <li><code>first(n)</code> — primeiros n elementos</li>
          <li><code>take(n)</code> — pega n elementos</li>
          <li><code>drop(n)</code> — remove n elementos</li>
          <li><code>uniq</code> — remove duplicatas</li>
          <li><code>flatten</code> — achata arrays aninhados</li>
        </ul>`
      },
      {
        title: 'Exemplo: Métodos de Consulta',
        type: 'code',
        lang: 'ruby',
        code: `numeros = [1, 2, 3, 4, 5]

puts numeros.any? { |n| n > 3 }   # true
puts numeros.all? { |n| n > 0 }   # true
puts numeros.none? { |n| n > 10 } # true
puts numeros.one? { |n| n == 3 }  # true

# first/take/drop
puts [1, 2, 3, 4, 5].first(2)  # [1, 2]
puts [1, 2, 3, 4, 5].take(3)   # [1, 2, 3]
puts [1, 2, 3, 4, 5].drop(2)   # [3, 4, 5]

# uniq e flatten
puts [1, 1, 2, 2, 3].uniq       # [1, 2, 3]
puts [[1, 2], [3, [4]]].flatten # [1, 2, 3, 4]

# chain de métodos — estilo Ruby!
puts [1, 2, 3, 4, 5, 6]
  .select(&:even?)
  .map { |n| n ** 2 }
  .reject { |n| n > 20 }
  # [4, 16]`,
        comment: 'Encadeamento é a alma do Ruby idiomático!'
      },
      {
        title: 'Lazy Enumerators',
        type: 'text',
        content: '<p>Enumerable padrão é "ansioso" — processa tudo na memória. Para coleções infinitas ou gigantes, use <code>lazy</code> para processamento sob demanda (preguiçoso).</p>',
      },
      {
        title: 'Exemplo: Lazy',
        type: 'code',
        lang: 'ruby',
        code: `# Sem lazy — cria arrays intermediários
(1..Float::INFINITY)
  .select { |n| n.even? }
  .first(5)  # Loop infinito! Nunca termina

# Com lazy — sob demanda!
(1..Float::INFINITY)
  .lazy
  .select { |n| n.even? }
  .first(5)
# => [2, 4, 6, 8, 10]

# Exemplo prático: primeiros 10 palíndromos
palindromos = (1..Float::INFINITY)
  .lazy
  .select { |n| n.to_s == n.to_s.reverse }
  .first(10)

puts palindromos.inspect
# [1, 2, 3, 4, 5, 6, 7, 8, 9, 11]

# lazy com map — só calcula quando necessário
dados = [1, 2, 3, 4, 5].lazy
  .map { |n| puts "Map: #{n}"; n * 2 }
  .select { |n| puts "Select: #{n}"; n > 5 }
  .take(2).to_a

puts dados.inspect  # [6, 8]`,
        comment: 'Use lazy para streams infinitos, arquivos grandes ou quando só precisa de alguns resultados',
      },
      {
        title: 'each_with_object',
        type: 'text',
        content: '<p><code>each_with_object</code> é como <code>reduce</code>, mas mais legível para construir hashes ou arrays. Você passa um objeto inicial e ele é passado em cada iteração.</p>',
      },
      {
        title: 'Exemplo: each_with_object',
        type: 'code',
        lang: 'ruby',
        code: `# Agrupar por primeira letra
palavras = %w[gato galo rato rima]
agrupado = palavras.each_with_object({}) do |palavra, hash|
  hash[palavra[0]] ||= []
  hash[palavra[0]] << palavra
end
puts agrupado.inspect
# {"g"=>["gato", "galo"], "r"=>["rato", "rima"]}

# Contar frequência com valores padrão
texto = "ruby é legal ruby é divertido"
freq = texto.split.each_with_object(Hash.new(0)) do |palavra, contagem|
  contagem[palavra] += 1
end
puts freq.inspect
# {"ruby"=>2, "é"=>2, "legal"=>1, "divertido"=>1}

# Construir array de pares
pares = (1..5).each_with_object([]) do |n, arr|
  arr << [n, n * 2]
end
puts pares.inspect
# [[1, 2], [2, 4], [3, 6], [4, 8], [5, 10]]`,
        comment: 'Prefira each_with_object a reduce quando o resultado é um hash ou array',
      },
      {
        title: 'flat_map e grep',
        type: 'text',
        content: '<p><code>flat_map</code> (ou <code>collect_concat</code>) mapeia e achata em um passo. <code>grep</code> filtra por padrão usando <code>===</code> (case equality).</p>',
      },
      {
        title: 'Exemplo: flat_map e grep',
        type: 'code',
        lang: 'ruby',
        code: `# flat_map — mapear e achatar
grupos = [[1, 2], [3, 4, 5], [6]]
puts grupos.flat_map { |g| g.map { |n| n * 2 } }.inspect
# [2, 4, 6, 8, 10, 12]

# Sem flat_map (map + flatten)
puts grupos.map { |g| g.map { |n| n * 2 } }.flatten.inspect
# [2, 4, 6, 8, 10, 12]

# Extrair todos os valores de hashes aninhados
dados = [{ a: 1, b: 2 }, { c: 3 }, { d: 4, e: 5 }]
puts dados.flat_map(&:values).inspect
# [1, 2, 3, 4, 5]

# grep — filtrar por classe
mixed = [1, "ruby", 2.5, "python", 3, :sym]
puts mixed.grep(String).inspect
# ["ruby", "python"]

# grep com ranges
puts (1..20).grep(10..15).inspect
# [10, 11, 12, 13, 14, 15]

# grep_v — inverso do grep
puts mixed.grep_v(String).inspect
# [1, 2.5, 3, :sym]

# grep com transformação (grep + map)
puts mixed.grep(String) { |s| s.upcase }.inspect
# ["RUBY", "PYTHON"]`,
        comment: 'flat_map substitui map + flatten em um único passo e é mais eficiente',
      },
      {
        title: 'slice_before, chunk e cycle',
        type: 'text',
        content: '<p><code>slice_before</code> e <code>chunk</code> dividem coleções em partes. <code>cycle</code> itera infinitamente (ou N vezes).</p>',
      },
      {
        title: 'Exemplo: Agrupamento Avançado',
        type: 'code',
        lang: 'ruby',
        code: `# slice_before — corta quando condição é true
dados = [1, 2, 3, 99, 4, 5, 99, 6, 7]
partes = dados.slice_before { |n| n == 99 }
puts partes.to_a.inspect
# [[1, 2, 3], [99, 4, 5], [99, 6, 7]]
# Útil para logs separados por marcadores

# chunk — agrupa por valor de bloco
nums = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]
agrupado = nums.chunk { |n| n }
puts agrupado.to_a.inspect
# [[1, [1]], [2, [2, 2]], [3, [3, 3, 3]], [4, [4, 4, 4, 4]]]

# chunk com condição
nums2 = [1, 2, 3, 4, 5, 6]
chunked = nums2.chunk { |n| n.even? }
puts chunked.to_a.inspect
# [[false, [1]], [true, [2]], [false, [3]], [true, [4]], [false, [5]], [true, [6]]]

# cycle — repetir N vezes
rotacao = ["ruby", "python", "js"]
ciclos = rotacao.cycle(2).to_a
puts ciclos.inspect
# ["ruby", "python", "js", "ruby", "python", "js"]

# cycle com each — útil para turnos
rotacao.cycle(3).each_with_index do |lang, i|
  puts "Turno #{i + 1}: #{lang}"
end`,
        comment: 'slice_before é ótimo para processar logs com marcadores, chunk para dados sequenciais',
      },
      {
        title: 'max, min, minmax, count e member?',
        type: 'text',
        content: '<p>Enumerable oferece métodos de consulta úteis: <code>max</code>/<code>min</code> com blocos, <code>minmax</code> para ambos de uma vez, <code>count</code> com condição, e <code>member?</code>/<code>include?</code> para pertinência.</p>',
      },
      {
        title: 'Exemplo: Consultas',
        type: 'code',
        lang: 'ruby',
        code: `# max/min básico
nums = [10, 5, 8, 20, 3]
puts nums.max      # 20
puts nums.min      # 3
puts nums.minmax.inspect  # [3, 20]

# max/min com bloco (por atributo)
pessoas = [
  { nome: "Ana", idade: 25 },
  { nome: "João", idade: 30 },
  { nome: "Zeca", idade: 22 }
]

mais_velho = pessoas.max { |a, b| a[:idade] <=> b[:idade] }
puts mais_velho[:nome]  # João

# max_by/min_by — mais idiomático
mais_novo = pessoas.min_by { |p| p[:idade] }
puts mais_novo[:nome]  # Zeca

# count com condição
nums = [1, 2, 3, 4, 5, 6]
puts nums.count           # 6
puts nums.count { |n| n.even? }  # 3
puts nums.count(3)        # 1

# member? / include?
puts [1, 2, 3].member?(2)     # true
puts [1, 2, 3].include?(5)    # false
puts (1..10).member?(7)       # true

# first, last, take, drop
puts [1, 2, 3, 4, 5].first(3).inspect  # [1, 2, 3]
puts [1, 2, 3, 4, 5].last(2).inspect   # [4, 5]
puts [1, 2, 3, 4, 5].take(2).inspect   # [1, 2]
puts [1, 2, 3, 4, 5].drop(3).inspect   # [4, 5]`,
        comment: 'Use max_by/min_by em vez de max/min com bloco para código mais limpo',
      },
      {
        title: 'Resumo',
        type: 'info',
        style: 'tip',
        icon: '📌',
        content: 'Enumerable oferece map (transformar), select (filtrar), reduce (acumular), sort (ordenar), group_by (agrupar) e muitos mais. Encadeie métodos para código elegante.'
      },
      {
        title: 'Erros Comuns',
        type: 'info',
        style: 'error-box',
        icon: '⚠️',
        content: '<strong>Usar each quando map é mais adequado</strong> — map retorna nova coleção, each não. <strong>Modificar objeto durante iteração.</strong> <strong>Esquecer que reduce precisa de valor inicial</strong> em coleções vazias.'
      },
      {
        title: 'Boas Práticas',
        type: 'info',
        style: 'info',
        icon: '💡',
        content: '<strong>Use map em vez de each + push.</strong> <strong>Use o atalho &:method</strong> para blocos simples. <strong>Encadeie métodos</strong> para código mais expressivo. <strong>Use reduce para acumulações complexas.</strong>'
      }
    ],
    exercises: [
      { id: 'enum-ex1', question: 'Qual método transforma cada elemento de uma coleção?', answer: 'map', hint: 'Também chamado de collect', difficulty: 'facil' },
      { id: 'enum-ex2', question: 'Qual método filtra elementos que satisfazem uma condição?', answer: 'select', hint: 'Significa "selecionar"', difficulty: 'facil' },
      { id: 'enum-ex3', question: 'Qual método acumula valores durante iteração?', answer: 'reduce', hint: 'Também chamado de inject', difficulty: 'medio' },
      { id: 'enum-ex4', question: 'Qual atalho substitui { |x| x.upcase }?', answer: '&:upcase', hint: 'Usa & e :', difficulty: 'medio' },
      { id: 'enum-ex5', question: 'Qual método retorna true se TODOS os elementos satisfazem?', answer: 'all?', hint: 'Tem ? no final', difficulty: 'medio' },
      { id: 'enum-ex6', question: 'Qual método divide uma coleção em dois arrays?', answer: 'partition', hint: 'Começa com "part"', difficulty: 'dificil' }
    ]
  },
  {
    id: 'excecoes',
    title: 'Tratamento de Exceções',
    number: 11,
    level: 'intermediario',
    category: 'intermediario',
    description: 'begin, rescue, ensure, raise — lide com erros de forma elegante.',
    topics: ['begin/rescue', 'ensure', 'raise', 'Custom Exceptions', 'retry'],
    icon: '🛡️',
    docs: ['https://ruby-doc.org/core-3.0.0/doc/syntax/exceptions_rdoc.html'],
    sections: [
      {
        title: 'begin/rescue/ensure',
        type: 'text',
        content: '<p>Exceções são erros que ocorrem durante a execução. Ruby permite capturá-las com begin/rescue/ensure.</p><p>begin marca o código que pode gerar erro. rescue captura a exceção. ensure sempre executa.</p>'
      },
      {
        title: 'Exemplo',
        type: 'code',
        lang: 'ruby',
        code: 'begin\n  resultado = 10 / 0\nrescue ZeroDivisionError => e\n  puts "Erro: #{e.message}"\nensure\n  puts "Isso sempre executa!"\nend',
        comment: 'Capture exceções específicas, não Exception genérica'
      },
      {
        title: 'raise',
        type: 'text',
        content: '<p>Use raise para lançar exceções manualmente. Crie exceções personalizadas herdando de StandardError.</p>'
      },
      {
        title: 'Exemplo: raise',
        type: 'code',
        lang: 'ruby',
        code: 'raise "Algo deu errado!"\nraise ArgumentError, "Argumento inválido"\nclass MeuErro < StandardError; end\nraise MeuErro, "Erro específico"',
        comment: 'Sempre herde de StandardError para exceções customizadas'
      },
      {
        title: 'retry',
        type: 'text',
        content: '<p>retry dentro de rescue faz o bloco begin executar novamente. Use com cuidado para evitar loops infinitos.</p>'
      },
      {
        title: 'Resumo',
        type: 'info',
        style: 'tip',
        icon: '📌',
        content: 'Use begin/rescue/ensure para tratar erros. raise para lançar. retry para repetir. Capture exceções específicas.'
      },
      {
        title: 'Erros Comuns',
        type: 'info',
        style: 'error-box',
        icon: '⚠️',
        content: 'Capturar Exception genérica esconde erros. rescue sem begin não funciona em todo escopo. Esquecer ensure causa vazamento de recursos.'
      },
      {
        title: 'Boas Práticas',
        type: 'info',
        style: 'info',
        icon: '💡',
        content: 'Capture exceções específicas. Feche recursos em ensure. Não use exceções para fluxo normal. Documente exceções que seu método lança.'
      }
    ],
    exercises: [
      { id: 'exc-ex1', question: 'Qual palavra inicia um bloco de tratamento de exceção?', answer: 'begin', hint: 'Significa "começar"', difficulty: 'facil' },
      { id: 'exc-ex2', question: 'Qual palavra captura exceções?', answer: 'rescue', hint: 'Como "resgatar" em português', difficulty: 'facil' },
      { id: 'exc-ex3', question: 'Qual palavra sempre executa, havendo erro ou não?', answer: 'ensure', hint: 'Significa "garantir"', difficulty: 'medio' },
      { id: 'exc-ex4', question: 'Qual palavra lança uma exceção manualmente?', answer: 'raise', hint: 'Significa "levantar"', difficulty: 'medio' },
      { id: 'exc-ex5', question: 'Qual classe é a superclasse de todas as exceções?', answer: 'Exception', hint: 'Começa com E', difficulty: 'dificil' }
    ]
  },
  {
    id: 'modulos-mixins',
    title: 'Módulos & Mixins',
    number: 12,
    level: 'intermediario',
    category: 'intermediario',
    description: 'Namespaces, mixins, include, extend e a reutilização de código em Ruby.',
    topics: ['Módulos', 'Namespaces', 'include', 'extend', 'Mixins', 'Comparable'],
    icon: '🧩',
    docs: ['https://ruby-doc.org/core-3.0.0/doc/syntax/modules_rdoc.html'],
    sections: [
      {
        title: 'O que são Módulos?',
        type: 'text',
        content: '<p>Módulos servem a dois propósitos: <strong>Namespaces</strong> (agrupar código) e <strong>Mixins</strong> (compartilhar comportamento). Diferente de classes, módulos não podem ser instanciados.</p>'
      },
      {
        title: 'Exemplo: Namespaces',
        type: 'code',
        lang: 'ruby',
        code: 'module Calculadora\n  PI = 3.14159\n  def self.soma(a, b) = a + b\nend\nputs Calculadora::PI\nputs Calculadora.soma(2, 3)',
        comment: 'Use :: para acessar constantes em módulos'
      },
      {
        title: 'include vs extend',
        type: 'text',
        content: '<p>include adiciona como métodos de instância. extend adiciona como métodos de classe.</p>'
      },
      {
        title: 'Exemplo',
        type: 'code',
        lang: 'ruby',
        code: 'module Saudacao\n  def ola = "Olá!"\nend\nclass Pessoa; include Saudacao; end\nclass Bot; extend Saudacao; end\nputs Pessoa.new.ola\nputs Bot.ola',
        comment: 'include para instância, extend para classe'
      },
      {
        title: 'Resumo',
        type: 'info',
        style: 'tip',
        icon: '📌',
        content: 'Módulos como namespaces e mixins. include para instância, extend para classe. Prefira composição com módulos a herança.'
      },
      {
        title: 'Erros Comuns',
        type: 'info',
        style: 'error-box',
        icon: '⚠️',
        content: 'Tentar instanciar módulo não funciona. Conflito de nomes: último include vence.'
      },
      {
        title: 'Boas Práticas',
        type: 'info',
        style: 'info',
        icon: '💡',
        content: 'Use módulos para comportamentos (verbs) e classes para entidades (nouns). Mantenha módulos pequenos (SRP).'
      }
    ],
    exercises: [
      { id: 'mod-ex1', question: 'Qual palavra-chave define um módulo?', answer: 'module', hint: 'Mesma palavra em inglês', difficulty: 'facil' },
      { id: 'mod-ex2', question: 'Qual método inclui um módulo em uma classe (instância)?', answer: 'include', hint: 'Significa "incluir"', difficulty: 'facil' },
      { id: 'mod-ex3', question: 'Qual método adiciona métodos de módulo como métodos de classe?', answer: 'extend', hint: 'Significa "estender"', difficulty: 'medio' },
      { id: 'mod-ex4', question: 'Qual operador acessa constantes de um módulo?', answer: '::', hint: 'Dois pontos duplos', difficulty: 'medio' },
      { id: 'mod-ex5', question: 'Que módulo deve ser incluído para usar sintaxe de comparação?', answer: 'Comparable', hint: 'Permite usar <, >, <=>', difficulty: 'dificil' }
    ]
  },
  {
    id: 'arquivos-io',
    title: 'Arquivos & I/O',
    number: 13,
    level: 'intermediario',
    category: 'intermediario',
    description: 'Leitura e escrita de arquivos, File class, Dir e manipulação do sistema.',
    topics: ['File', 'Dir', 'Leitura', 'Escrita', 'Pathname', 'CSV'],
    icon: '📁',
    docs: ['https://ruby-doc.org/core-3.0.0/File.html'],
    sections: [
      {
        title: 'Lendo Arquivos',
        type: 'text',
        content: '<p>Ruby torna leitura de arquivos simples com a classe File. Sempre use blocos para garantir fechamento automático.</p>'
      },
      {
        title: 'Exemplo: Leitura',
        type: 'code',
        lang: 'ruby',
        code: 'File.read("arquivo.txt")\nFile.foreach("arquivo.txt") { |linha| puts linha }\nFile.open("arquivo.txt", "r") { |f| puts f.read }',
        comment: 'File.read carrega tudo na memória. Para arquivos grandes, use foreach'
      },
      {
        title: 'Escrevendo Arquivos',
        type: 'text',
        content: '<p>Modos: r (leitura), w (escrita), a (append), r+ (leitura/escrita).</p>'
      },
      {
        title: 'Exemplo: Escrita',
        type: 'code',
        lang: 'ruby',
        code: 'File.write("saida.txt", "Olá!\\n")\nFile.open("log.txt", "a") { |f| f.puts "Log: #{Time.now}" }',
        comment: 'Use modo "a" para adicionar ao final do arquivo'
      },
      {
        title: 'Diretórios e CSV',
        type: 'text',
        content: '<p>Use Dir para diretórios e a biblioteca CSV para planilhas.</p>'
      },
      {
        title: 'Exemplo: Dir e CSV',
        type: 'code',
        lang: 'ruby',
        code: 'Dir.glob("*.rb")\nDir.mkdir("pasta")\n\nrequire "csv"\nCSV.foreach("dados.csv", headers: true) { |l| puts l["nome"] }',
        comment: 'CSV faz parte da stdlib — não precisa instalar gem'
      },
      {
        title: 'Resumo',
        type: 'info',
        style: 'tip',
        icon: '📌',
        content: 'File.read/File.write para operações simples. File.open com bloco para controle. Dir para diretórios. CSV para planilhas.'
      },
      {
        title: 'Erros Comuns',
        type: 'info',
        style: 'error-box',
        icon: '⚠️',
        content: 'Errno::ENOENT em arquivo inexistente. Esquecer de fechar arquivo — sempre use blocos!'
      },
      {
        title: 'Boas Práticas',
        type: 'info',
        style: 'info',
        icon: '💡',
        content: 'Sempre use blocos com File.open. Verifique permissões antes de escrever. Use Pathname para manipulação moderna de paths.'
      }
    ],
    exercises: [
      { id: 'arq-ex1', question: 'Qual classe representa arquivos em Ruby?', answer: 'File', hint: 'Mesma palavra em inglês', difficulty: 'facil' },
      { id: 'arq-ex2', question: 'Qual modo abre um arquivo para escrita?', answer: 'w', hint: 'Primeira letra de "write"', difficulty: 'facil' },
      { id: 'arq-ex3', question: 'Qual método lê todo o conteúdo de um arquivo?', answer: 'read', hint: 'Significa "ler"', difficulty: 'medio' },
      { id: 'arq-ex4', question: 'Qual bloco garante que o arquivo será fechado?', answer: 'File.open', hint: 'Usa um bloco', difficulty: 'medio' },
      { id: 'arq-ex5', question: 'Qual classe representa diretórios?', answer: 'Dir', hint: 'Abreviação de "directory"', difficulty: 'medio' }
    ]
  },
  {
    id: 'regex',
    title: 'Expressões Regulares',
    number: 14,
    level: 'intermediario',
    category: 'intermediario',
    description: 'Regex em Ruby: match, scan, sub, gsub e padrões de busca.',
    topics: ['//', 'match', 'scan', 'gsub', 'Grupos', 'Âncoras'],
    icon: '🔤',
    docs: ['https://ruby-doc.org/core-3.0.0/Regexp.html'],
    sections: [
      {
        title: 'Criando Expressões Regulares',
        type: 'text',
        content: '<p>Regex em Ruby são criados entre barras: /padrão/. Flags: i (case insensitive), x (espaços), m (multiline).</p>'
      },
      {
        title: 'Exemplo',
        type: 'code',
        lang: 'ruby',
        code: '/ruby/\n/Ruby/i =~ "ruby"  # 0\n"Python" =~ /ruby/  # nil',
        comment: '=~ retorna posição do match ou nil'
      },
      {
        title: 'Métodos Úteis',
        type: 'text',
        content: '<p>match para detalhes do match. scan para todas ocorrências. gsub para substituir todas.</p>'
      },
      {
        title: 'Exemplo: scan e gsub',
        type: 'code',
        lang: 'ruby',
        code: '"Ruby, Python, Ruby".scan(/\\w+/)                    # ["Ruby", "Python", "Ruby"]\n"Ruby é legal!".gsub(/[aeiou]/, "*")          # "R*b* * l*g*l!"\n"123-abc".gsub(/\\d+/) { |n| n.to_i * 2 }   # "246-abc"',
        comment: 'gsub com bloco permite transformação dinâmica'
      },
      {
        title: 'Grupos e Named Captures',
        type: 'code',
        lang: 'ruby',
        code: '# Grupos de captura () - retornam em match\ntexto = "João tem 25 anos"\nm = texto.match(/(\\w+) tem (\\d+) anos/)\nputs m[1]  # João\nputs m[2]  # 25\n\n# Named captures (?<nome>padrão)\ndados = "Maria,30,maria@email.com"\npadrao = /(?<nome>\\w+),(?<idade>\\d+),(?<email>\\S+)/\nm = dados.match(padrao)\nputs m[:nome]   # Maria\nputs m[:idade]  # 30',
        comment: 'Named captures tornam regex mais legíveis que índices numéricos'
      },
      {
        title: 'Âncoras e Lookahead',
        type: 'code',
        lang: 'ruby',
        code: '# Âncoras\n/^Ruby/  =~ "Ruby é legal"    # 0 (começa com)\n/Ruby$/ =~ "adoro Ruby"      # 6 (termina com)\n/\\bRuby\\b/ =~ "Ruby on Rails"  # 0 (fronteira de palavra)\n\n# Lookahead positivo (?=)\n/\\w+(?=@)/ =~ "joao@email.com"  # "joao" (antes do @)\n\n# Lookahead negativo (?!)\n/\\d+(?!\\d)/ =~ "abc123def"  # "3" (último dígito)\n\n# Lookbehind positivo (?<=)\n/(?<=R)uby/ =~ "Ruby"  # 0 (depois de R)\n\n# Exemplo prático: validar email\nemail_regex = /\\A[\\w.+-]+@[\\w-]+\\.\\w{2,}\\z/\nputs email_regex =~ "teste@email.com"  # 0 (válido)',
        comment: 'Âncoras (^ $ \\b) e lookahead/lookbehind para validações precisas'
      },
      {
        title: 'Padrões Comuns (Regex)',
        type: 'code',
        lang: 'ruby',
        code: '# CPF: 000.000.000-00\ncpf = /\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}/\nputs cpf =~ "123.456.789-00"  # 0\n\n# Telefone: (00) 00000-0000\ntel = /\\(\\d{2}\\) \\d{4,5}-\\d{4}/\nputs tel =~ "(11) 91234-5678"  # 0\n\n# URL\nurl = /https?:\\/\\/[\\w.-]+/\nputs url =~ "https://ruby-lang.org"  # 0\n\n# Extrair hashtags\ntweet = "Aprendendo #Ruby com #RubyQuest!"\nputs tweet.scan(/#\\w+/)  # ["#Ruby", "#RubyQuest"]\n\n# Substituição avançada com gsub e bloco\ndata = "2024-01-15"\nputs data.gsub(/(\\d{4})-(\\d{2})-(\\d{2})/) { "#{$3}/#{$2}/#{$1}" }  # 15/01/2024',
        comment: 'Esses padrões são úteis no dia a dia para validação de formulários'
      },
      {
        title: 'Resumo',
        type: 'info',
        style: 'tip',
        icon: '📌',
        content: '=~ para testar, match para detalhes, scan para múltiplos, gsub para substituir. Regex entre //.'
      },
      {
        title: 'Erros Comuns',
        type: 'info',
        style: 'error-box',
        icon: '⚠️',
        content: 'Esquecer escaping: . significa "qualquer caractere", use \\. para ponto literal. Regex muito complexo — divida em partes.'
      },
      {
        title: 'Boas Práticas',
        type: 'info',
        style: 'info',
        icon: '💡',
        content: 'Use //x para regex complexos com comentários. Teste no IRB. Prefira métodos específicos (start_with?) para casos simples.'
      }
    ],
    exercises: [
      { id: 'reg-ex1', question: 'Qual operador testa se uma string match um regex?', answer: '=~', hint: 'Igual + til', difficulty: 'medio' },
      { id: 'reg-ex2', question: 'Qual método substitui todas as ocorrências de um padrão?', answer: 'gsub', hint: 'Global substitution', difficulty: 'medio' },
      { id: 'reg-ex3', question: 'Qual método retorna todas as ocorrências de um padrão?', answer: 'scan', hint: 'Significa "escanear"', difficulty: 'medio' },
      { id: 'reg-ex4', question: 'Como se cria um regex literal em Ruby?', answer: '//', hint: 'Duas barras', difficulty: 'facil' },
      { id: 'reg-ex5', question: 'Qual caractere âncora representa o início da string?', answer: '^', hint: 'Acento circunflexo', difficulty: 'dificil' }
    ]
  },
  {
    id: 'logica-programacao',
    title: 'Lógica de Programação',
    number: 15,
    level: 'intermediario',
    category: 'intermediario',
    description: 'Pensamento lógico, algoritmos, pseudocódigo, fluxogramas e resolução de problemas.',
    topics: ['Pensamento Lógico', 'Algoritmos', 'Pseudocódigo', 'Fluxogramas', 'Decomposição', 'Otimização'],
    icon: '🧠',
    docs: ['https://ruby-doc.org/core-3.0.0/doc/syntax/control_expressions_rdoc.html'],
    sections: [
      {
        title: 'O que é Lógica de Programação?',
        type: 'text',
        content: '<p>É a habilidade de pensar estruturadamente para resolver problemas. Envolve decomposição, abstração, algoritmos e design de soluções.</p>'
      },
      {
        title: 'Decomposição',
        type: 'text',
        content: '<p>Quebrar problemas grandes em problemas menores. Exemplo: sistema bancário → autenticação, saldo, saque, depósito, extrato.</p>'
      },
      {
        title: 'Algoritmos',
        type: 'text',
        content: '<p>Sequência finita de passos. Pseudocódigo ajuda a planejar antes de codificar. Fluxogramas representam visualmente.</p>'
      },
      {
        title: 'Exemplo: Pseudocódigo → Ruby',
        type: 'code',
        lang: 'ruby',
        code: '# Pseudocódigo:\n# SE nota >= 6 → "Aprovado"\n# SENÃO → "Reprovado"\n\nnota >= 6 ? "Aprovado" : "Reprovado"',
        comment: 'Pseudocódigo planeja a lógica antes do código'
      },
      {
        title: 'Big O',
        type: 'text',
        content: '<p>Mede como o tempo de execução cresce com a entrada. O(1)=constante, O(n)=linear, O(n²)=quadrático, O(log n)=logarítmico.</p>'
      },
      {
        title: 'Exemplo: O(n) vs O(log n)',
        type: 'code',
        lang: 'ruby',
        code: '# O(n) — busca linear\ndef buscar(array, alvo)\n  array.each { |e| return true if e == alvo }\n  false\nend\n\n# O(log n) — busca binária (array ordenado)\ndef busca_binaria(array, alvo)\n  esq, dir = 0, array.length - 1\n  while esq <= dir\n    meio = (esq + dir) / 2\n    return true if array[meio] == alvo\n    array[meio] < alvo ? esq = meio + 1 : dir = meio - 1\n  end\n  false\nend',
        comment: 'Busca binária é exponencialmente mais rápida que busca linear'
      },
      {
        title: 'Resumo',
        type: 'info',
        style: 'tip',
        icon: '📌',
        content: 'Decomponha problemas, crie algoritmos, use pseudocódigo. Entenda Big O para código eficiente. Pratique com exercícios crescentes.'
      },
      {
        title: 'Erros Comuns',
        type: 'info',
        style: 'error-box',
        icon: '⚠️',
        content: 'Otimização prematura: primeiro faça funcionar. Pular planejamento: pensar antes de codificar. Ignorar casos de borda: teste entradas vazias.'
      },
      {
        title: 'Boas Práticas',
        type: 'info',
        style: 'info',
        icon: '💡',
        content: 'Planeje antes de codificar. Teste casos de borda. Refatore em funções menores. Meça performance antes de otimizar.'
      }
    ],
    exercises: [
      { id: 'log-ex1', question: 'O que é um algoritmo?', answer: 'sequência de passos', hint: 'É uma "receita" para resolver um problema', difficulty: 'facil' },
      { id: 'log-ex2', question: 'Qual técnica divide um problema em partes menores?', answer: 'decomposição', hint: 'Significa "quebrar em partes"', difficulty: 'medio' },
      { id: 'log-ex3', question: 'Qual estrutura repete um bloco de código?', answer: 'loop', hint: 'While, for, each...', difficulty: 'facil' },
      { id: 'log-ex4', question: 'Qual estrutura toma decisões no código?', answer: 'condicional', hint: 'if, case, unless...', difficulty: 'facil' },
      { id: 'log-ex5', question: 'O que é abstração em programação?', answer: 'simplificar complexidade', hint: 'Esconder detalhes, mostrar essência', difficulty: 'dificil' },
      { id: 'log-ex6', question: 'Qual notação mede a eficiência de algoritmos?', answer: 'Big O', hint: 'O maiúsculo', difficulty: 'dificil' }
    ]
  },
  {
    id: 'estruturas-dados',
    title: 'Estruturas de Dados',
    number: 16,
    level: 'avancado',
    category: 'avancado',
    description: 'Arrays, listas ligadas, pilhas, filas, árvores, hash tables, grafos, busca, ordenação e Big O.',
    topics: ['Pilhas/Filas', 'Árvores', 'Grafos', 'Busca', 'Ordenação', 'Big O'],
    icon: '🌲',
    docs: ['https://ruby-doc.org/core-3.0.0/Array.html'],
    sections: [
      {
        title: 'Estruturas de Dados',
        type: 'text',
        content: '<p>São formas organizadas de armazenar e manipular dados. Ruby já inclui Array e Hash. A estrutura certa transforma algoritmos lentos em rápidos.</p>'
      },
      {
        title: 'Pilhas (Stack) — LIFO',
        type: 'text',
        content: '<p>Último a entrar, primeiro a sair. Array já funciona como pilha com push/pop (O(1)).</p>'
      },
      {
        title: 'Filas (Queue) — FIFO',
        type: 'text',
        content: '<p>Primeiro a entrar, primeiro a sair. Use push/shift em Array ou Queue da stdlib.</p>'
      },
      {
        title: 'Exemplo',
        type: 'code',
        lang: 'ruby',
        code: '# Pilha (LIFO)\npilha = []; pilha.push(1); pilha.push(2)\nputs pilha.pop  # 2\n\n# Fila (FIFO)\nfila = []; fila.push(1); fila.push(2)\nputs fila.shift  # 1',
        comment: 'shift é O(n) em Array. Queue é mais eficiente para filas'
      },
      {
        title: 'Árvores e Hash Tables',
        type: 'text',
        content: '<p>Árvores: estrutura hierárquica com raiz. Hash Tables: chave-valor com acesso O(1). O Hash do Ruby é uma hash table.</p>'
      },
      {
        title: 'Grafos e Ordenação',
        type: 'info',
        style: 'info',
        icon: '🔄',
        content: 'Grafos: nós conectados por arestas (redes, mapas). Bubble Sort O(n²), Quick Sort O(n log n), Merge Sort O(n log n). Ruby usa TimSort.'
      },
      {
        title: 'Hash Tables na Prática',
        type: 'code',
        lang: 'ruby',
        code: '# Hash Table = Hash do Ruby\n# Acesso O(1) — instantâneo mesmo com milhões de itens!\n\ncontatos = {}\n\n# Inserção O(1)\ncontatos["joao"] = "9999-0001"\ncontatos["maria"] = "9999-0002"\ncontatos["ana"] = "9999-0003"\n\n# Busca O(1) — extremamente rápida!\nputs contatos["maria"]  # "9999-0002"\n\n# Comparação: Array vs Hash para buscas\nnomes = ["joao", "maria", "ana", "carlos"]\n\n# Busca em Array: O(n) — precisa percorrer tudo\nputs nomes.include?("maria")  # true, mas lento em arrays grandes\n\n# Busca em Hash: O(1) — acesso direto!\nbusca_rapida = {"joao"=>true, "maria"=>true, "ana"=>true}\nputs busca_rapida["maria"]  # true (instantâneo!)\n\n# Hash com valor padrão (contagem de palavras)\ntexto = "ruby python ruby java ruby elixir python"\ncontagem = Hash.new(0)\ntexto.split.each { |palavra| contagem[palavra] += 1 }\nputs contagem\n# {"ruby"=>3, "python"=>2, "java"=>1, "elixir"=>1}',
        comment: 'Sempre use Hash para buscas rápidas. Array é O(n), Hash é O(1)!'
      },
      {
        title: 'Grafos: DFS e BFS',
        type: 'code',
        lang: 'ruby',
        code: '# Grafo representado como Hash (lista de adjacência)\ngrafo = {\n  "A" => ["B", "C"],\n  "B" => ["A", "D", "E"],\n  "C" => ["A", "F"],\n  "D" => ["B"],\n  "E" => ["B", "F"],\n  "F" => ["C", "E"]\n}\n\n# Busca em Profundidade (DFS) — usa pilha\ndef dfs(grafo, inicio, visitados = [])\n  visitados << inicio\n  grafo[inicio].each do |vizinho|\n    dfs(grafo, vizinho, visitados) unless visitados.include?(vizinho)\n  end\n  visitados\nend\n\nputs dfs(grafo, "A").join(" → ")\n# A → B → D → E → F → C\n\n# Busca em Largura (BFS) — usa fila\ndef bfs(grafo, inicio)\n  visitados = []\n  fila = [inicio]\n  until fila.empty?\n    no = fila.shift\n    next if visitados.include?(no)\n    visitados << no\n    fila.concat(grafo[no] - visitados)\n  end\n  visitados\nend\n\nputs bfs(grafo, "A").join(" → ")\n# A → B → C → D → E → F\n\n# DFS vs BFS\n# DFS: vai fundo (pilha) — bom para labirintos\n# BFS: vai largo (fila) — bom para menor caminho',
        comment: 'Grafos são estruturas versáteis para modelar conexões e relações'
      },
      {
        title: 'Resumo',
        type: 'info',
        style: 'tip',
        icon: '📌',
        content: 'Pilhas (LIFO), Filas (FIFO), Árvores (hierarquia), Hash Tables (O(1)), Grafos (conexões). A estrutura certa determina a performance.'
      },
      {
        title: 'Erros Comuns',
        type: 'info',
        style: 'error-box',
        icon: '⚠️',
        content: 'Usar array quando hash é melhor (O(n) vs O(1)). Usar pop em fila (pop é LIFO). Ignorar complexidade — O(n²) é perigoso.'
      },
      {
        title: 'Boas Práticas',
        type: 'info',
        style: 'info',
        icon: '💡',
        content: 'Conheça a complexidade de cada operação. Use Hash para lookups rápidos. Queue é thread-safe para concorrência.'
      }
    ],
    exercises: [
      { id: 'ed-ex1', question: 'Qual estrutura de dados é LIFO?', answer: 'pilha', hint: 'Stack em inglês', difficulty: 'medio' },
      { id: 'ed-ex2', question: 'Qual estrutura de dados é FIFO?', answer: 'fila', hint: 'Queue em inglês', difficulty: 'medio' },
      { id: 'ed-ex3', question: 'Qual estrutura de dados tem um nó raiz?', answer: 'árvore', hint: 'Tree em inglês', difficulty: 'medio' },
      { id: 'ed-ex4', question: 'Qual Big O representa busca binária?', answer: 'O(log n)', hint: 'Logarítmico', difficulty: 'dificil' },
      { id: 'ed-ex5', question: 'Qual método de ordenação é o mais simples?', answer: 'Bubble Sort', hint: 'Bolha em português', difficulty: 'dificil' },
      { id: 'ed-ex6', question: 'Qual estrutura mapeia chaves para valores?', answer: 'hash table', hint: 'Em Ruby é chamado de Hash', difficulty: 'medio' }
    ]
  },
  {
    id: 'avancados',
    title: 'Tópicos Avançados',
    number: 17,
    level: 'avancado',
    category: 'avancado',
    description: 'Threads, Fibers, Metaprogramação, DSLs, Refinamentos e Monkey Patching.',
    topics: ['Threads', 'Fibers', 'Metaprogramming', 'DSL', 'Refinamentos', 'Monkey Patching'],
    icon: '🚀',
    docs: ['https://ruby-doc.org/core-3.0.0/doc/syntax/refinements_rdoc.html'],
    sections: [
      {
        title: 'Threads',
        type: 'text',
        content: '<p>Threads executam tarefas concorrentemente. Ruby MRI tem GIL, então threads são melhores para I/O-bound tasks.</p>'
      },
      {
        title: 'Exemplo: Threads',
        type: 'code',
        lang: 'ruby',
        code: 't1 = Thread.new { 3.times { puts "A"; sleep 0.1 } }\nt2 = Thread.new { 3.times { puts "B"; sleep 0.1 } }\nt1.join; t2.join',
        comment: 'Thread.new cria e já inicia. Use join para aguardar'
      },
      {
        title: 'Fibers',
        type: 'text',
        content: '<p>Fibers são mais leves que threads. São cooperativas — você controla quando pausar/retomar.</p>'
      },
      {
        title: 'Exemplo: Fibers',
        type: 'code',
        lang: 'ruby',
        code: 'f = Fiber.new do\n  puts "Passo 1"; Fiber.yield\n  puts "Passo 2"; "fim"\nend\nf.resume  # Passo 1\nf.resume  # Passo 2',
        comment: 'Fiber.yield pausa, resume continua'
      },
      {
        title: 'Metaprogramação',
        type: 'text',
        content: '<p>Escrever código que escreve código. Ruby é famoso por metaprogramação com define_method e method_missing.</p>'
      },
      {
        title: 'Exemplo',
        type: 'code',
        lang: 'ruby',
        code: '# define_method\nclass Saudacao\n  [:ola, :tchau].each do |nome|\n    define_method(nome) { |p| "#{nome}, #{p}!" }\n  end\nend\n\n# method_missing\nclass Proxy\n  def method_missing(name, *args)\n    puts "[Proxy] #{name}"\n  end\n  def respond_to_missing?(name, inc = false) = true\nend\nProxy.new.xyz  # [Proxy] xyz',
        comment: 'Sempre sobrescreva respond_to_missing? com method_missing'
      },
      {
        title: 'Refinamentos vs Monkey Patching',
        type: 'info',
        style: 'info',
        icon: '🔧',
        content: 'Monkey Patching modifica globalmente (arriscado). Refinamentos são modificações escopadas (seguro). Prefira refinamentos!'
      },
      {
        title: 'Resumo',
        type: 'info',
        style: 'tip',
        icon: '📌',
        content: 'Threads para I/O-bound. Fibers para cooperação. define_method e method_missing para metaprogramação. Refinamentos > Monkey Patching.'
      },
      {
        title: 'Erros Comuns',
        type: 'info',
        style: 'error-box',
        icon: '⚠️',
        content: 'Race conditions: use Mutex. Abusar de method_missing: difícil de debugar. Monkey Patching global: use refinamentos.'
      },
      {
        title: 'Boas Práticas',
        type: 'info',
        style: 'info',
        icon: '💡',
        content: 'Use Mutex para dados compartilhados. Ractors (Ruby 3.0+) para paralelismo real. Documente metaprogramação.'
      }
    ],
    exercises: [
      { id: 'av-ex1', question: 'Qual classe representa threads em Ruby?', answer: 'Thread', hint: 'Mesma palavra em inglês', difficulty: 'medio' },
      { id: 'av-ex2', question: 'Qual método define métodos dinamicamente?', answer: 'define_method', hint: 'define_ + method', difficulty: 'dificil' },
      { id: 'av-ex3', question: 'Qual método intercepta chamadas para métodos inexistentes?', answer: 'method_missing', hint: 'method + _missing', difficulty: 'dificil' },
      { id: 'av-ex4', question: 'O que é Monkey Patching?', answer: 'modificar classes em tempo de execução', hint: 'Macaco + remendo', difficulty: 'dificil' },
      { id: 'av-ex5', question: 'Qual recurso limita o escopo de Monkey Patches?', answer: 'Refinements', hint: 'Refinamentos em português', difficulty: 'dificil' },
      { id: 'av-ex6', question: 'Qual classe é mais leve que Thread para concorrência?', answer: 'Fiber', hint: 'Fibra em português', difficulty: 'dificil' }
    ]
  },
  {
    id: 'discord-bot',
    title: 'Bot para Discord',
    number: 18,
    level: 'avancado',
    category: 'avancado',
    description: 'Crie bots para Discord com Ruby usando discordrb. Projeto final completo.',
    topics: ['discordrb', 'Eventos', 'Comandos', 'Moderação', 'API', 'Deploy'],
    icon: '🤖',
    docs: ['https://www.rubydoc.info/gems/discordrb'],
    sections: [
      {
        title: 'Introdução ao discordrb',
        type: 'text',
        content: '<p>discordrb é a gem para criar bots Discord em Ruby. API completa para servidores, canais, usuários e mensagens.</p>'
      },
      {
        title: 'Setup',
        type: 'code',
        lang: 'bash',
        code: 'gem install discordrb\n\n# Crie app em discord.com/developers\n# Copie o token do bot',
        comment: 'Nunca compartilhe o token! Use variável de ambiente'
      },
      {
        title: 'Bot Básico',
        type: 'code',
        lang: 'ruby',
        code: 'require "discordrb"\nbot = Discordrb::Bot.new token: "SEU_TOKEN"\n\nbot.ready { puts "Bot conectado!" }\n\nbot.message do |event|\n  if event.content == "!ola"\n    event.respond "Olá, #{event.user.name}!"\n  end\nend\n\nbot.run',
        comment: 'Bot mínimo: ready + message handlers'
      },
      {
        title: 'Comandos com Prefixo',
        type: 'code',
        lang: 'ruby',
        code: 'PREFIXO = "!"\nbot.message do |event|\n  next unless event.content.start_with?(PREFIXO)\n  args = event.content.split\n  cmd = args.first[PREFIXO.length..]\n  case cmd\n  when "dizer" then event.respond args[1..].join(" ")\n  when "avatar" then event.respond event.user.avatar_url\n  end\nend',
        comment: 'Organize comandos com case/when para legibilidade'
      },
      {
        title: 'Moderação',
        type: 'code',
        lang: 'ruby',
        code: 'bot.message do |event|\n  next unless event.content == "!limpar"\n  next unless event.user.permission?(:manage_messages)\n  msgs = event.channel.history(50)\n  event.channel.delete_messages(msgs)\n  event.respond "Limpei #{msgs.size} mensagens!"\nend',
        comment: 'Sempre verifique permissões antes de ações administrativas'
      },
      {
        title: 'Deploy',
        type: 'info',
        style: 'info',
        icon: '🚀',
        content: 'Opções gratuitas: Heroku (worker dyno), Railway, Fly.io. Use ENV["DISCORD_TOKEN"] para o token. Mantenha o bot vivo com pings.'
      },
      {
        title: 'Resumo',
        type: 'info',
        style: 'tip',
        icon: '📌',
        content: 'discordrb para bots Discord. Eventos: ready, message. Comandos com prefixo. Moderação com permissões. Deploy em cloud.'
      },
      {
        title: 'Erros Comuns',
        type: 'info',
        style: 'error-box',
        icon: '⚠️',
        content: 'Token exposto: use ENV. Intents não ativadas no Developer Portal. Rate limiting: implemente cooldowns.'
      },
      {
        title: 'Boas Práticas',
        type: 'info',
        style: 'info',
        icon: '💡',
        content: 'Use dotenv para tokens. Implemente cooldowns. Organize comandos em módulos. Trate erros com rescue. Mantenha o bot atualizado.'
      }
    ],
    exercises: [
      { id: 'disc-ex1', question: 'Qual gem é usada para criar bots no Discord?', answer: 'discordrb', hint: 'discord + rb (ruby)', difficulty: 'medio' },
      { id: 'disc-ex2', question: 'Qual método é chamado quando o bot fica online?', answer: 'ready', hint: 'Evento de "pronto"', difficulty: 'medio' },
      { id: 'disc-ex3', question: 'O que é um "token" no Discord?', answer: 'chave de autenticação do bot', hint: 'É como uma senha', difficulty: 'medio' },
      { id: 'disc-ex4', question: 'Qual prefixo é comum para comandos de bot?', answer: '!', hint: 'Exclamação', difficulty: 'facil' },
      { id: 'disc-ex5', question: 'Qual evento é acionado quando uma mensagem é enviada?', answer: 'message', hint: 'Mensagem em inglês', difficulty: 'medio' }
    ]
  },
  {
    id: 'boas-praticas',
    title: 'Boas Práticas & Clean Code',
    number: 19,
    level: 'avancado',
    category: 'avancado',
    description: 'Escreva Ruby idiomático, legível e sustentável seguindo o Ruby Style Guide.',
    topics: ['Nomeação', 'Métodos pequenos', 'Guard clauses', 'Idiomas Ruby', 'DRY'],
    icon: '✨',
    docs: ['https://rubystyle.guide/'],
    sections: [
      {
        title: 'A Filosofia do Código Limpo',
        type: 'text',
        content: `<p>Ruby foi desenhado para a <strong>felicidade do programador</strong>. Código limpo não é sobre esperteza — é sobre <em>clareza</em>. Um bom código Ruby lê-se quase como inglês e revela sua intenção sem comentários.</p>
        <p>Três princípios guiam este módulo:</p>
        <ul>
          <li><strong>Legibilidade acima de tudo</strong> — código é lido muito mais vezes do que escrito.</li>
          <li><strong>DRY (Don't Repeat Yourself)</strong> — cada conhecimento deve ter uma única representação.</li>
          <li><strong>Menor surpresa</strong> — o código faz o que aparenta fazer.</li>
        </ul>`
      },
      {
        title: 'Nomeação e Convenções',
        type: 'code',
        lang: 'ruby',
        code: `# ❌ Ruim: nomes vagos, abreviações
def calc(x, y)
  x * y * 0.1
end

# ✅ Bom: nomes que revelam intenção
def calcular_desconto(preco, quantidade)
  preco * quantidade * TAXA_DESCONTO
end

# Métodos que retornam booleano terminam com ?
def maior_de_idade?(idade) = idade >= 18

# Métodos perigosos/mutáveis terminam com !
array.sort   # retorna novo array
array.sort!  # modifica o original`,
        comment: 'snake_case para métodos/variáveis, CamelCase para classes, ? para predicados, ! para métodos destrutivos'
      },
      {
        title: 'Guard Clauses (Cláusulas de Guarda)',
        type: 'text',
        content: `<p>Em vez de aninhar <code>if</code>s profundos, retorne cedo. Isso reduz a indentação e destaca o "caminho feliz" do método.</p>`
      },
      {
        title: 'Exemplo: Guard Clauses',
        type: 'code',
        lang: 'ruby',
        code: `# ❌ Ruim: pirâmide de indentação
def processar(pedido)
  if pedido
    if pedido.pago?
      if pedido.itens.any?
        enviar(pedido)
      end
    end
  end
end

# ✅ Bom: guard clauses achatam a lógica
def processar(pedido)
  return unless pedido
  return unless pedido.pago?
  return if pedido.itens.empty?

  enviar(pedido)
end`,
        comment: 'Retorne cedo em casos inválidos e deixe o caminho principal claro no fim'
      },
      {
        title: 'Idiomas Ruby Essenciais',
        type: 'code',
        lang: 'ruby',
        code: `# Prefira métodos de Enumerable a loops manuais
# ❌
total = 0
[1, 2, 3].each { |n| total += n }
# ✅
total = [1, 2, 3].sum

# Safe navigation em vez de checar nil
usuario && usuario.endereco && usuario.endereco.cidade   # ❌
usuario&.endereco&.cidade                                 # ✅

# Atribuição condicional para valores padrão
@cache ||= carregar_dados

# fetch com padrão em vez de checagem manual
config.fetch(:timeout, 30)

# each_with_object para construir coleções
%w[a b c].each_with_object({}) { |l, h| h[l] = l.upcase }
# => {"a"=>"A", "b"=>"B", "c"=>"C"}`,
        comment: 'Código idiomático usa a biblioteca padrão em vez de reinventá-la'
      },
      {
        title: 'Métodos Pequenos e Coesos',
        type: 'info',
        style: 'info',
        icon: '💡',
        content: 'Um método deve fazer <strong>uma coisa só</strong>. Se você precisa de um comentário para separar "seções" dentro de um método, provavelmente são dois métodos. Regra prática: métodos com até ~5 linhas e classes com uma responsabilidade única (SRP).'
      },
      {
        title: 'Resumo',
        type: 'info',
        style: 'tip',
        icon: '📌',
        content: 'Nomeie com intenção, use <code>?</code>/<code>!</code> corretamente, prefira guard clauses a aninhamento, abrace os métodos de Enumerable e mantenha métodos pequenos. Rode <strong>RuboCop</strong> para automatizar o estilo.'
      },
      {
        title: 'Erros Comuns',
        type: 'info',
        style: 'error-box',
        icon: '⚠️',
        content: '<strong>Comentar código óbvio</strong> em vez de renomear. <strong>Métodos gigantes</strong> que fazem tudo. <strong>Abusar de variáveis globais</strong> (<code>$var</code>). <strong>Otimização prematura</strong> — escreva claro primeiro, otimize com dados depois.'
      }
    ],
    exercises: [
      { id: 'bp-ex1', question: 'Qual sufixo indica um método que retorna booleano?', answer: '?', hint: 'Ponto de interrogação', difficulty: 'facil' },
      { id: 'bp-ex2', question: 'Qual sufixo indica um método destrutivo (que muda o objeto)?', answer: '!', hint: 'Exclamação', difficulty: 'facil' },
      { id: 'bp-ex3', question: 'Como se chama a técnica de retornar cedo para evitar aninhamento?', answer: 'guard clause', hint: 'Cláusula de "guarda"', difficulty: 'medio' },
      { id: 'bp-ex4', question: 'Qual ferramenta analisa e força o estilo de código Ruby?', answer: 'rubocop', hint: 'Robô + policial', difficulty: 'medio' },
      { id: 'bp-ex5', question: 'Que princípio diz "não se repita"?', answer: 'DRY', hint: 'Sigla de 3 letras', difficulty: 'facil' }
    ]
  },
  {
    id: 'web-frameworks',
    title: 'Desenvolvimento Web',
    number: 20,
    level: 'avancado',
    category: 'ecossistema',
    description: 'Ruby on Rails, Sinatra e Hanami — quando e por que usar cada framework web.',
    topics: ['Rails', 'Sinatra', 'Hanami', 'MVC', 'Quando usar'],
    icon: '🌐',
    docs: ['https://rubyonrails.org/', 'https://sinatrarb.com/'],
    sections: [
      {
        title: 'O Ecossistema Web do Ruby',
        type: 'text',
        content: `<p>Ruby ficou mundialmente famoso graças ao <strong>Ruby on Rails</strong>. Mas o ecossistema oferece opções para cada tamanho de projeto:</p>
        <ul>
          <li><strong>Rails</strong> — framework completo ("full-stack"), convenção sobre configuração.</li>
          <li><strong>Sinatra</strong> — micro-framework minimalista, ideal para APIs e serviços pequenos.</li>
          <li><strong>Hanami</strong> — framework moderno, modular e focado em arquitetura limpa.</li>
        </ul>`
      },
      {
        title: 'Ruby on Rails',
        type: 'text',
        content: `<p><strong>Rails</strong> segue o padrão <strong>MVC</strong> (Model-View-Controller) e a filosofia "convenção sobre configuração": se você seguir as convenções, escreve muito pouco código. Traz ORM (Active Record), rotas, migrations, mailers, jobs e muito mais de fábrica.</p>
        <p><strong>Use quando:</strong> aplicações completas com banco de dados, painéis administrativos, SaaS, e-commerce, MVPs que precisam ir rápido.</p>`
      },
      {
        title: 'Exemplo: Rails',
        type: 'code',
        lang: 'ruby',
        code: `# Gerar um recurso completo (model + controller + views + rotas)
# $ rails generate scaffold Post titulo:string corpo:text

# app/models/post.rb
class Post < ApplicationRecord
  validates :titulo, presence: true
  has_many :comentarios, dependent: :destroy
end

# app/controllers/posts_controller.rb
class PostsController < ApplicationController
  def index
    @posts = Post.order(created_at: :desc)
  end

  def show
    @post = Post.find(params[:id])
  end
end

# config/routes.rb
Rails.application.routes.draw do
  resources :posts
end`,
        comment: 'Active Record mapeia tabelas para classes automaticamente'
      },
      {
        title: 'Sinatra',
        type: 'code',
        lang: 'ruby',
        code: `require 'sinatra'
require 'json'

# Um servidor web completo em poucas linhas
get '/' do
  'Olá, mundo!'
end

get '/api/usuarios/:id' do
  content_type :json
  { id: params[:id], nome: 'Ana' }.to_json
end

post '/api/usuarios' do
  dados = JSON.parse(request.body.read)
  status 201
  dados.to_json
end
# $ ruby app.rb  →  http://localhost:4567`,
        comment: 'Sinatra é perfeito para APIs pequenas, webhooks e protótipos'
      },
      {
        title: 'Hanami',
        type: 'text',
        content: `<p><strong>Hanami</strong> é um framework mais novo que enfatiza <strong>arquitetura limpa</strong>, baixo consumo de memória e separação clara de responsabilidades (entidades, repositórios, ações). É mais opinativo sobre design do que Rails.</p>
        <p><strong>Use quando:</strong> você quer uma base sólida com padrões de arquitetura explícitos e times que valorizam desacoplamento.</p>`
      },
      {
        title: 'Qual Escolher?',
        type: 'info',
        style: 'info',
        icon: '💡',
        content: '<strong>Rails</strong>: apps grandes, produtividade máxima, comunidade enorme. <strong>Sinatra</strong>: microserviços, APIs e webhooks. <strong>Hanami</strong>: quando arquitetura limpa e performance são prioridade. Na dúvida para um produto real: <strong>comece com Rails</strong>.'
      },
      {
        title: 'Resumo',
        type: 'info',
        style: 'tip',
        icon: '📌',
        content: 'Rails = completo e produtivo. Sinatra = mínimo e leve. Hanami = arquitetura moderna. Todos rodam sobre <strong>Rack</strong>, a interface padrão entre servidores e apps Ruby.'
      },
      {
        title: 'Erros Comuns',
        type: 'info',
        style: 'error-box',
        icon: '⚠️',
        content: '<strong>Usar Rails para um script simples</strong> — é canhão para matar mosca. <strong>Ignorar migrations</strong> e alterar o banco na mão. <strong>Colocar lógica de negócio nos controllers</strong> em vez de nos models/services (fat controller).'
      }
    ],
    exercises: [
      { id: 'web-ex1', question: 'Qual framework Ruby segue "convenção sobre configuração"?', answer: 'rails', hint: 'O mais famoso', difficulty: 'facil' },
      { id: 'web-ex2', question: 'Qual micro-framework é ideal para APIs pequenas?', answer: 'sinatra', hint: 'Nome de uma cantora... quase', difficulty: 'facil' },
      { id: 'web-ex3', question: 'Qual sigla descreve o padrão de Rails (Model-View-Controller)?', answer: 'MVC', hint: '3 letras', difficulty: 'medio' },
      { id: 'web-ex4', question: 'Qual camada do Rails mapeia tabelas do banco para classes?', answer: 'Active Record', hint: 'O ORM do Rails', difficulty: 'medio' },
      { id: 'web-ex5', question: 'Qual interface padrão conecta servidores web e apps Ruby?', answer: 'rack', hint: 'Prateleira, em inglês', difficulty: 'dificil' }
    ]
  },
  {
    id: 'automacao',
    title: 'Automação & Scripts',
    number: 21,
    level: 'avancado',
    category: 'ecossistema',
    description: 'Automatize arquivos, processos e tarefas do sistema com scripts Ruby.',
    topics: ['Scripts', 'Arquivos em lote', 'Rake', 'Shell', 'FileUtils'],
    icon: '🤖',
    docs: ['https://ruby-doc.org/stdlib/libdoc/fileutils/rdoc/FileUtils.html'],
    sections: [
      {
        title: 'Ruby como Linguagem de Automação',
        type: 'text',
        content: `<p>Ruby é excelente para automação: sintaxe expressiva, biblioteca padrão rica e ótimo suporte a arquivos, diretórios e execução de comandos do sistema. É uma alternativa poderosa ao Bash para scripts que crescem.</p>`
      },
      {
        title: 'Automação de Arquivos',
        type: 'code',
        lang: 'ruby',
        code: `require 'fileutils'

# Renomear todos os .txt de uma pasta para .md
Dir.glob('docs/*.txt').each do |arquivo|
  novo = arquivo.sub(/\\.txt$/, '.md')
  FileUtils.mv(arquivo, novo)
  puts "Renomeado: #{arquivo} -> #{novo}"
end

# Copiar, mover, criar e apagar
FileUtils.mkdir_p('backup/2026')     # cria pasta (e pais)
FileUtils.cp('dados.csv', 'backup/') # copia
FileUtils.rm_rf('temp')              # remove recursivamente

# Organizar downloads por extensão
Dir.glob('downloads/*').each do |arq|
  next if File.directory?(arq)
  ext = File.extname(arq).delete('.')
  FileUtils.mkdir_p("downloads/#{ext}")
  FileUtils.mv(arq, "downloads/#{ext}/")
end`,
        comment: 'FileUtils traz mkdir_p, cp, mv, rm_rf — como comandos de shell, mas portáveis'
      },
      {
        title: 'Executando Comandos do Sistema',
        type: 'code',
        lang: 'ruby',
        code: `# system: executa e retorna true/false
system('git', 'status')

# %x[] ou crase capturam a saída
saida = %x[ls -la]
puts saida

# Open3 para controle total (stdout, stderr, status)
require 'open3'
stdout, stderr, status = Open3.capture3('ruby', '-v')
puts stdout if status.success?

# Automatizar backup com timestamp
data = Time.now.strftime('%Y-%m-%d')
system("tar -czf backup-#{data}.tar.gz ./projeto")`,
        comment: 'Prefira passar argumentos separados (segurança) em vez de interpolar strings de shell'
      },
      {
        title: 'Rake — O "Make" do Ruby',
        type: 'code',
        lang: 'ruby',
        code: `# Rakefile — defina tarefas automatizáveis
task :default => :saudacao

desc 'Exibe uma saudação'
task :saudacao do
  puts 'Olá do Rake!'
end

desc 'Limpa arquivos temporários'
task :limpar do
  Dir.glob('tmp/*').each { |f| File.delete(f) }
  puts 'Temporários removidos.'
end

# Tarefas dependentes
task :deploy => [:testar, :build] do
  puts 'Deploy concluído!'
end
# $ rake limpar`,
        comment: 'Rake automatiza rotinas do projeto (build, deploy, migração, limpeza)'
      },
      {
        title: 'Quando Usar Frameworks vs Scripts',
        type: 'info',
        style: 'info',
        icon: '💡',
        content: 'Para <strong>tarefas pontuais</strong>, um script <code>.rb</code> basta. Para rotinas recorrentes de um projeto, use <strong>Rake</strong>. Para automação agendada, combine Ruby com <strong>cron</strong> (Linux) ou o Agendador de Tarefas (Windows). Bibliotecas úteis: <code>fileutils</code>, <code>open3</code>, <code>pathname</code>, <code>optparse</code> (argumentos de linha de comando).'
      },
      {
        title: 'Resumo',
        type: 'info',
        style: 'tip',
        icon: '📌',
        content: 'Use <code>Dir.glob</code> + <code>FileUtils</code> para manipular arquivos, <code>system</code>/<code>Open3</code> para comandos do sistema e <strong>Rake</strong> para orquestrar tarefas. Ruby escala melhor que Bash quando a lógica cresce.'
      },
      {
        title: 'Erros Comuns',
        type: 'info',
        style: 'error-box',
        icon: '⚠️',
        content: '<strong>Interpolar entrada do usuário em comandos de shell</strong> (risco de injeção). <strong>Usar <code>rm_rf</code> sem confirmar o caminho</strong>. <strong>Ignorar o código de saída</strong> dos comandos — sempre verifique <code>status.success?</code>.'
      }
    ],
    exercises: [
      { id: 'auto-ex1', question: 'Qual módulo traz mkdir_p, cp e mv?', answer: 'FileUtils', hint: 'Utilitários de arquivo', difficulty: 'medio' },
      { id: 'auto-ex2', question: 'Qual método retorna arquivos que batem com um padrão (ex: *.rb)?', answer: 'Dir.glob', hint: 'Dir + "englobar"', difficulty: 'medio' },
      { id: 'auto-ex3', question: 'Qual é o "make" do Ruby para automatizar tarefas?', answer: 'rake', hint: 'Rima com make', difficulty: 'facil' },
      { id: 'auto-ex4', question: 'Qual método executa um comando e retorna true/false?', answer: 'system', hint: 'Nome do "sistema"', difficulty: 'facil' },
      { id: 'auto-ex5', question: 'Qual biblioteca captura stdout, stderr e status de um comando?', answer: 'Open3', hint: 'Open + um número', difficulty: 'dificil' }
    ]
  },
  {
    id: 'apis',
    title: 'APIs & HTTP',
    number: 22,
    level: 'avancado',
    category: 'ecossistema',
    description: 'Consuma e crie APIs REST em Ruby, trabalhando com JSON e o protocolo HTTP.',
    topics: ['REST', 'HTTP', 'JSON', 'Consumir API', 'Criar API'],
    icon: '🔌',
    docs: ['https://ruby-doc.org/stdlib/libdoc/net/http/rdoc/Net/HTTP.html'],
    sections: [
      {
        title: 'O que é uma API REST?',
        type: 'text',
        content: `<p>Uma <strong>API REST</strong> expõe recursos através de URLs e usa os verbos HTTP para operá-los:</p>
        <ul>
          <li><strong>GET</strong> — ler recursos</li>
          <li><strong>POST</strong> — criar</li>
          <li><strong>PUT/PATCH</strong> — atualizar</li>
          <li><strong>DELETE</strong> — remover</li>
        </ul>
        <p>O formato de troca de dados mais comum é o <strong>JSON</strong>.</p>`
      },
      {
        title: 'Consumindo uma API',
        type: 'code',
        lang: 'ruby',
        code: `require 'net/http'
require 'json'
require 'uri'

# Requisição GET com a biblioteca padrão
uri = URI('https://api.github.com/users/ruby')
resposta = Net::HTTP.get(uri)
dados = JSON.parse(resposta)
puts dados['name']         # "Ruby"
puts dados['public_repos']

# POST com corpo JSON
uri = URI('https://exemplo.com/api/usuarios')
http = Net::HTTP.new(uri.host, uri.port)
http.use_ssl = true
req = Net::HTTP::Post.new(uri, 'Content-Type' => 'application/json')
req.body = { nome: 'Ana', idade: 30 }.to_json
resposta = http.request(req)
puts resposta.code         # "201"`,
        comment: 'net/http vem embutido. Para conforto, use a gem "httparty" ou "faraday"'
      },
      {
        title: 'Consumindo com HTTParty (gem)',
        type: 'code',
        lang: 'ruby',
        code: `require 'httparty'

# GET simples
resp = HTTParty.get('https://api.github.com/users/ruby')
puts resp['name']
puts resp.code             # 200

# POST com JSON
HTTParty.post(
  'https://exemplo.com/api/tarefas',
  headers: { 'Content-Type' => 'application/json' },
  body: { titulo: 'Estudar Ruby' }.to_json
)`,
        comment: 'HTTParty simplifica muito o consumo de APIs — parse automático de JSON'
      },
      {
        title: 'Criando uma API com Sinatra',
        type: 'code',
        lang: 'ruby',
        code: `require 'sinatra'
require 'json'

TAREFAS = []

before { content_type :json }

# Listar
get '/tarefas' do
  TAREFAS.to_json
end

# Criar
post '/tarefas' do
  dados = JSON.parse(request.body.read)
  tarefa = { id: TAREFAS.size + 1, titulo: dados['titulo'], feita: false }
  TAREFAS << tarefa
  status 201
  tarefa.to_json
end

# Remover
delete '/tarefas/:id' do
  TAREFAS.reject! { |t| t[:id] == params[:id].to_i }
  status 204
end`,
        comment: 'Uma API REST completa em uma tela de código com Sinatra'
      },
      {
        title: 'Trabalhando com JSON',
        type: 'code',
        lang: 'ruby',
        code: `require 'json'

# Objeto Ruby -> JSON (serializar)
usuario = { nome: 'Ana', tags: ['ruby', 'dev'] }
json = usuario.to_json
puts json  # {"nome":"Ana","tags":["ruby","dev"]}

# JSON -> Hash Ruby (desserializar)
hash = JSON.parse('{"nome":"Ana","idade":30}')
puts hash['nome']  # Ana

# Chaves como símbolos
JSON.parse(json, symbolize_names: true)  # {nome: "Ana", ...}

# JSON formatado (pretty)
puts JSON.pretty_generate(usuario)`,
        comment: 'to_json serializa, JSON.parse desserializa. symbolize_names dá chaves como símbolos'
      },
      {
        title: 'Resumo',
        type: 'info',
        style: 'tip',
        icon: '📌',
        content: 'Use <strong>verbos HTTP</strong> (GET/POST/PUT/DELETE) sobre recursos, troque dados em <strong>JSON</strong>, consuma com <code>net/http</code> ou <code>HTTParty</code> e crie APIs enxutas com <strong>Sinatra</strong> (ou Rails API-only).'
      },
      {
        title: 'Erros Comuns',
        type: 'info',
        style: 'error-box',
        icon: '⚠️',
        content: '<strong>Esquecer <code>Content-Type: application/json</code></strong>. <strong>Não tratar códigos de erro</strong> (4xx/5xx) da resposta. <strong>Confiar em dados externos</strong> sem validar. <strong>Expor chaves de API no código</strong> — use variáveis de ambiente (<code>ENV</code>).'
      }
    ],
    exercises: [
      { id: 'api-ex1', question: 'Qual verbo HTTP é usado para LER um recurso?', answer: 'GET', hint: '"Pegar" em inglês', difficulty: 'facil' },
      { id: 'api-ex2', question: 'Qual verbo HTTP cria um novo recurso?', answer: 'POST', hint: 'Enviar/postar', difficulty: 'facil' },
      { id: 'api-ex3', question: 'Qual método converte um Hash Ruby em texto JSON?', answer: 'to_json', hint: 'Segue o padrão to_*', difficulty: 'medio' },
      { id: 'api-ex4', question: 'Qual método transforma texto JSON em Hash Ruby?', answer: 'JSON.parse', hint: 'Analisar (parse)', difficulty: 'medio' },
      { id: 'api-ex5', question: 'Qual biblioteca padrão faz requisições HTTP em Ruby?', answer: 'net/http', hint: 'net + protocolo', difficulty: 'medio' }
    ]
  },
  {
    id: 'banco-dados',
    title: 'Banco de Dados',
    number: 23,
    level: 'avancado',
    category: 'ecossistema',
    description: 'SQLite, PostgreSQL e MySQL com Ruby — quando usar cada um e como conectar.',
    topics: ['SQLite', 'PostgreSQL', 'MySQL', 'SQL', 'ORM'],
    icon: '🗄️',
    docs: ['https://guides.rubyonrails.org/active_record_basics.html'],
    sections: [
      {
        title: 'Escolhendo um Banco de Dados',
        type: 'text',
        content: `<p>Cada banco atende a um cenário:</p>
        <ul>
          <li><strong>SQLite</strong> — banco em um único arquivo, zero configuração. Ideal para desenvolvimento, apps pequenos, protótipos e testes.</li>
          <li><strong>PostgreSQL</strong> — robusto, cheio de recursos (JSONB, full-text search, tipos avançados). O favorito da comunidade Ruby para produção.</li>
          <li><strong>MySQL</strong> — muito difundido, rápido em leituras. Comum em hospedagens compartilhadas e sistemas legados.</li>
        </ul>`
      },
      {
        title: 'SQLite — Começando',
        type: 'code',
        lang: 'ruby',
        code: `require 'sqlite3'

# Cria/abre um banco em arquivo
db = SQLite3::Database.new('app.db')

# Criar tabela
db.execute <<~SQL
  CREATE TABLE IF NOT EXISTS usuarios (
    id INTEGER PRIMARY KEY,
    nome TEXT NOT NULL,
    email TEXT UNIQUE
  );
SQL

# Inserir com placeholders (evita SQL injection!)
db.execute('INSERT INTO usuarios (nome, email) VALUES (?, ?)',
           ['Ana', 'ana@email.com'])

# Consultar
db.execute('SELECT * FROM usuarios').each do |linha|
  p linha   # [1, "Ana", "ana@email.com"]
end

db.close`,
        comment: 'Sempre use placeholders (?) — nunca interpole valores direto no SQL'
      },
      {
        title: 'PostgreSQL',
        type: 'code',
        lang: 'ruby',
        code: `require 'pg'

conn = PG.connect(
  host: 'localhost',
  dbname: 'meu_app',
  user: 'postgres',
  password: ENV['DB_PASSWORD']
)

# Consulta parametrizada ($1, $2 no Postgres)
resultado = conn.exec_params(
  'SELECT * FROM produtos WHERE preco > $1',
  [100]
)

resultado.each do |linha|
  puts "#{linha['nome']}: R$ #{linha['preco']}"
end

conn.close`,
        comment: 'No Postgres os placeholders são $1, $2... Guarde a senha em ENV, nunca no código'
      },
      {
        title: 'Active Record (ORM)',
        type: 'code',
        lang: 'ruby',
        code: `# Um ORM mapeia tabelas para classes — você escreve Ruby, não SQL
require 'active_record'

ActiveRecord::Base.establish_connection(
  adapter: 'sqlite3', database: 'app.db'
)

class Usuario < ActiveRecord::Base
end

# CRUD sem escrever SQL
Usuario.create(nome: 'Ana', email: 'ana@email.com')
Usuario.where('idade > ?', 18).order(:nome)
usuario = Usuario.find_by(email: 'ana@email.com')
usuario.update(nome: 'Ana Silva')
usuario.destroy`,
        comment: 'Active Record (usado no Rails) elimina a maior parte do SQL manual'
      },
      {
        title: 'SQL vs ORM',
        type: 'info',
        style: 'info',
        icon: '💡',
        content: 'Um <strong>ORM</strong> (Active Record, Sequel) aumenta a produtividade e a segurança, mas conhecer <strong>SQL puro</strong> é essencial para consultas complexas e otimização. A gem <strong>Sequel</strong> é uma alternativa leve ao Active Record fora do Rails.'
      },
      {
        title: 'Resumo',
        type: 'info',
        style: 'tip',
        icon: '📌',
        content: '<strong>SQLite</strong> para começar/testar, <strong>PostgreSQL</strong> para produção séria, <strong>MySQL</strong> para compatibilidade/legado. Sempre use <strong>placeholders</strong> e considere um <strong>ORM</strong> (Active Record/Sequel) para produtividade.'
      },
      {
        title: 'Erros Comuns',
        type: 'info',
        style: 'error-box',
        icon: '⚠️',
        content: '<strong>SQL Injection</strong> por interpolar valores na query — use placeholders. <strong>Deixar conexões abertas</strong> — sempre feche (ou use pool). <strong>Consultas N+1</strong> em ORMs — use <code>includes</code>/eager loading. <strong>Senhas no código</strong> — use <code>ENV</code>.'
      }
    ],
    exercises: [
      { id: 'db-ex1', question: 'Qual banco guarda tudo em um único arquivo, sem servidor?', answer: 'SQLite', hint: 'Lite = leve', difficulty: 'facil' },
      { id: 'db-ex2', question: 'Qual banco é o favorito da comunidade Ruby para produção?', answer: 'PostgreSQL', hint: 'Também chamado de "Postgres"', difficulty: 'medio' },
      { id: 'db-ex3', question: 'O que se usa no SQL para evitar injeção ao passar valores?', answer: 'placeholders', hint: 'O caractere ? ou $1', difficulty: 'medio' },
      { id: 'db-ex4', question: 'Qual ORM é usado pelo Rails?', answer: 'Active Record', hint: 'Registro "ativo"', difficulty: 'medio' },
      { id: 'db-ex5', question: 'Como se chama o problema de fazer muitas queries em loop?', answer: 'N+1', hint: 'Uma letra e dois números', difficulty: 'dificil' }
    ]
  },
  {
    id: 'testes',
    title: 'Testes Automatizados',
    number: 24,
    level: 'avancado',
    category: 'ecossistema',
    description: 'Minitest e RSpec — escreva testes que garantem que seu código funciona.',
    topics: ['Minitest', 'RSpec', 'TDD', 'Assertions', 'Mocks'],
    icon: '🧪',
    docs: ['https://docs.seattlerb.org/minitest/', 'https://rspec.info/'],
    sections: [
      {
        title: 'Por que Testar?',
        type: 'text',
        content: `<p>Testes automatizados são código que verifica seu código. Eles dão <strong>confiança</strong> para mudar sem quebrar, servem de <strong>documentação viva</strong> e capturam bugs cedo. Ruby tem uma cultura de testes muito forte.</p>
        <p>As duas ferramentas dominantes são <strong>Minitest</strong> (embutido, simples) e <strong>RSpec</strong> (DSL expressiva, muito popular).</p>`
      },
      {
        title: 'Minitest',
        type: 'code',
        lang: 'ruby',
        code: `require 'minitest/autorun'

# Código sob teste
class Calculadora
  def somar(a, b) = a + b
end

# Teste
class CalculadoraTest < Minitest::Test
  def setup
    @calc = Calculadora.new
  end

  def test_soma_dois_numeros
    assert_equal 5, @calc.somar(2, 3)
  end

  def test_soma_com_zero
    assert_equal 4, @calc.somar(4, 0)
  end
end
# $ ruby calculadora_test.rb`,
        comment: 'Minitest vem com Ruby. Métodos de teste começam com test_'
      },
      {
        title: 'RSpec',
        type: 'code',
        lang: 'ruby',
        code: `# spec/calculadora_spec.rb
require_relative '../calculadora'

RSpec.describe Calculadora do
  subject(:calc) { Calculadora.new }

  describe '#somar' do
    it 'soma dois números positivos' do
      expect(calc.somar(2, 3)).to eq(5)
    end

    it 'funciona com zero' do
      expect(calc.somar(4, 0)).to eq(4)
    end

    context 'com números negativos' do
      it 'retorna o resultado correto' do
        expect(calc.somar(-1, -1)).to eq(-2)
      end
    end
  end
end
# $ rspec`,
        comment: 'RSpec usa uma DSL legível: describe/context/it/expect...to'
      },
      {
        title: 'TDD — Test-Driven Development',
        type: 'text',
        content: `<p>No <strong>TDD</strong> você escreve o teste <em>antes</em> do código, seguindo o ciclo <strong>Red → Green → Refactor</strong>:</p>
        <ul>
          <li><strong>Red</strong>: escreva um teste que falha.</li>
          <li><strong>Green</strong>: escreva o mínimo de código para passar.</li>
          <li><strong>Refactor</strong>: melhore o código mantendo os testes verdes.</li>
        </ul>`
      },
      {
        title: 'Assertions e Matchers Comuns',
        type: 'code',
        lang: 'ruby',
        code: `# Minitest (assertions)
assert_equal esperado, real
assert result           # verdadeiro
refute result           # falso
assert_nil valor
assert_raises(ArgumentError) { metodo_perigoso }
assert_includes [1, 2, 3], 2

# RSpec (matchers)
expect(x).to eq(5)              # igualdade
expect(x).to be > 3             # comparação
expect(lista).to include(2)     # inclusão
expect(obj).to be_nil
expect { erro! }.to raise_error(RuntimeError)
expect(texto).to match(/ruby/i) # regex`,
        comment: 'Minitest usa assert_*, RSpec usa expect(...).to matcher'
      },
      {
        title: 'Resumo',
        type: 'info',
        style: 'tip',
        icon: '📌',
        content: '<strong>Minitest</strong> é simples e embutido; <strong>RSpec</strong> tem DSL expressiva. Ambos suportam <strong>TDD</strong> (Red-Green-Refactor). Teste comportamentos, não implementação, e busque cobrir os casos de borda.'
      },
      {
        title: 'Erros Comuns',
        type: 'info',
        style: 'error-box',
        icon: '⚠️',
        content: '<strong>Testar demais detalhes internos</strong> (testes frágeis). <strong>Testes que dependem de ordem</strong> ou de estado global. <strong>Não testar casos de erro</strong> e bordas. <strong>Deixar testes lentos/flaky</strong> sem isolamento.'
      }
    ],
    exercises: [
      { id: 'test-ex1', question: 'Qual framework de teste já vem embutido no Ruby?', answer: 'Minitest', hint: 'Mini + teste', difficulty: 'facil' },
      { id: 'test-ex2', question: 'Qual framework usa a DSL describe/it/expect?', answer: 'RSpec', hint: 'R + "spec"', difficulty: 'facil' },
      { id: 'test-ex3', question: 'Qual sigla descreve escrever o teste antes do código?', answer: 'TDD', hint: 'Test-Driven Development', difficulty: 'medio' },
      { id: 'test-ex4', question: 'Complete o ciclo do TDD: Red, Green, ___', answer: 'Refactor', hint: 'Melhorar o código', difficulty: 'medio' },
      { id: 'test-ex5', question: 'Qual assertion do Minitest compara igualdade?', answer: 'assert_equal', hint: 'assert + "igual"', difficulty: 'medio' }
    ]
  },
  {
    id: 'gems',
    title: 'Gems Essenciais',
    number: 25,
    level: 'avancado',
    category: 'ecossistema',
    description: 'As gems mais importantes do ecossistema Ruby — para que servem e quando usar.',
    topics: ['RubyGems', 'Bundler', 'Rails', 'Pry', 'RuboCop', 'Faraday'],
    icon: '💎',
    docs: ['https://rubygems.org/', 'https://bundler.io/'],
    sections: [
      {
        title: 'O que são Gems?',
        type: 'text',
        content: `<p>Uma <strong>gem</strong> é uma biblioteca Ruby empacotada e distribuída via <strong>RubyGems</strong> (o repositório oficial, rubygems.org). O <strong>Bundler</strong> gerencia as versões das gems do seu projeto através do <code>Gemfile</code>.</p>`
      },
      {
        title: 'Instalando e Gerenciando',
        type: 'code',
        lang: 'ruby',
        code: `# Instalar uma gem globalmente
# $ gem install rubocop

# Gemfile — dependências do projeto
source 'https://rubygems.org'

gem 'rails', '~> 7.1'
gem 'pg'
gem 'httparty'

group :development, :test do
  gem 'rspec'
  gem 'pry'
  gem 'rubocop', require: false
end

# $ bundle install   -> instala tudo
# $ bundle exec rspec -> roda no contexto do projeto`,
        comment: '~> "7.1" permite 7.x mas não 8.0 (pessimistic version constraint)'
      },
      {
        title: 'Gems por Categoria',
        type: 'text',
        content: `<p><strong>Web:</strong> <code>rails</code>, <code>sinatra</code>, <code>puma</code> (servidor), <code>rack</code>.</p>
        <p><strong>Banco de dados:</strong> <code>pg</code>, <code>sqlite3</code>, <code>mysql2</code>, <code>sequel</code>, <code>redis</code>.</p>
        <p><strong>APIs/HTTP:</strong> <code>httparty</code>, <code>faraday</code>, <code>rest-client</code>.</p>
        <p><strong>Testes:</strong> <code>rspec</code>, <code>minitest</code>, <code>factory_bot</code>, <code>faker</code>, <code>capybara</code>.</p>
        <p><strong>Qualidade/Debug:</strong> <code>rubocop</code>, <code>pry</code>, <code>byebug</code>, <code>simplecov</code>.</p>
        <p><strong>Background jobs:</strong> <code>sidekiq</code>, <code>resque</code>.</p>
        <p><strong>Utilidades:</strong> <code>dotenv</code>, <code>nokogiri</code> (HTML/XML), <code>chronic</code> (datas).</p>`
      },
      {
        title: 'Pry — Console Poderoso',
        type: 'code',
        lang: 'ruby',
        code: `require 'pry'

def calcular(a, b)
  resultado = a + b
  binding.pry   # pausa a execução aqui — inspecione tudo!
  resultado * 2
end

# No console do Pry você pode:
#   inspecionar variáveis (a, b, resultado)
#   navegar em objetos com ls e cd
#   testar código no meio da execução
#   continuar com 'exit' ou 'continue'`,
        comment: 'binding.pry é o melhor amigo do debugging em Ruby'
      },
      {
        title: 'Criando sua Própria Gem',
        type: 'code',
        lang: 'ruby',
        code: `# Esqueleto de uma gem nova
# $ bundle gem minha_gem

# minha_gem.gemspec descreve a gem
Gem::Specification.new do |spec|
  spec.name    = 'minha_gem'
  spec.version = '0.1.0'
  spec.summary = 'Uma gem incrível'
  spec.authors = ['Seu Nome']
  spec.files   = Dir['lib/**/*.rb']
end

# Publicar no rubygems.org
# $ gem build minha_gem.gemspec
# $ gem push minha_gem-0.1.0.gem`,
        comment: 'Qualquer um pode publicar gems — contribua com a comunidade!'
      },
      {
        title: 'Resumo',
        type: 'info',
        style: 'tip',
        icon: '📌',
        content: 'Gems são bibliotecas do <strong>RubyGems</strong>, gerenciadas pelo <strong>Bundler</strong> via <code>Gemfile</code>. Conheça as essenciais (rails, pg, rspec, rubocop, pry, sidekiq) e use <code>bundle exec</code> para rodar no contexto correto.'
      },
      {
        title: 'Erros Comuns',
        type: 'info',
        style: 'error-box',
        icon: '⚠️',
        content: '<strong>Não fixar versões</strong> (falta de <code>Gemfile.lock</code> no controle de versão). <strong>Instalar gems globalmente</strong> em vez de por projeto. <strong>Esquecer <code>bundle exec</code></strong>, rodando a versão errada. <strong>Adicionar gems demais</strong> — cada dependência é um risco.'
      }
    ],
    exercises: [
      { id: 'gem-ex1', question: 'Qual é o repositório oficial de gems do Ruby?', answer: 'RubyGems', hint: 'rubygems.org', difficulty: 'facil' },
      { id: 'gem-ex2', question: 'Qual ferramenta gerencia as dependências via Gemfile?', answer: 'Bundler', hint: 'Empacotador', difficulty: 'facil' },
      { id: 'gem-ex3', question: 'Qual gem/comando pausa a execução para debugar (binding.___)?', answer: 'pry', hint: '3 letras', difficulty: 'medio' },
      { id: 'gem-ex4', question: 'Qual gem força o estilo de código Ruby?', answer: 'rubocop', hint: 'Robô policial', difficulty: 'medio' },
      { id: 'gem-ex5', question: 'Qual arquivo trava as versões exatas das gems?', answer: 'Gemfile.lock', hint: 'Gemfile + "trava"', difficulty: 'dificil' }
    ]
  }
];

// ============================================================
// CHALLENGES DATA
// ============================================================
const CHALLENGES = [
  {
    id: 'challenge-1',
    title: 'Calculadora de IMC',
    description: 'Crie um programa que calcula o Índice de Massa Corporal e classifica o resultado.',
    icon: '⚖️',
    difficulty: 'facil',
    points: 50,
    hint: 'Use gets.chomp para entrada do usuário. IMC = peso / (altura ** 2)',
    answer: 'peso.to_f / (altura.to_f ** 2)'
  },
  {
    id: 'challenge-2',
    title: 'Jogo da Adivinhação',
    description: 'Implemente um jogo onde o computador sorteia um número e o usuário tenta adivinhar.',
    icon: '🎲',
    difficulty: 'medio',
    points: 100,
    hint: 'Use rand(1..100) para sortear. Use loop com break quando acertar.',
    answer: 'rand(1..100)'
  },
  {
    id: 'challenge-3',
    title: 'Analisador de Texto',
    description: 'Crie um programa que analisa um texto e retorna estatísticas: palavras, caracteres, frases.',
    icon: '📊',
    difficulty: 'medio',
    points: 100,
    hint: 'Use .split, .length, .scan para contar padrões.',
    answer: 'texto.split.length'
  },
  {
    id: 'challenge-4',
    title: 'Sistema de Tarefas (CLI)',
    description: 'Implemente um gerenciador de tarefas via terminal com adicionar, listar e remover.',
    icon: '✅',
    difficulty: 'dificil',
    points: 200,
    hint: 'Use um array de hashes. each_with_index para listar com índices.',
    answer: '@tarefas = []'
  },
  {
    id: 'challenge-5',
    title: 'Fibonacci Otimizado',
    description: 'Implemente a sequência de Fibonacci usando memoização para performance.',
    icon: '🌀',
    difficulty: 'dificil',
    points: 200,
    hint: 'Use um hash como cache. ||= para memoização.',
    answer: 'Hash.new { |h, k| h[k] = k < 2 ? k : h[k-1] + h[k-2] }'
  },
  {
    id: 'challenge-6',
    title: 'Validador de CPF',
    description: 'Implemente um validador de CPF com cálculo dos dígitos verificadores.',
    icon: '🪪',
    difficulty: 'dificil',
    points: 250,
    hint: 'O CPF tem 11 dígitos. Os dois últimos são dígitos verificadores calculados.',
    answer: 'digito1 = (0..8).sum { |i| cpf[i].to_i * (10 - i) } % 11'
  }
];

// ============================================================
// PROJECTS DATA
// ============================================================
const PROJECTS = [
  {
    id: 'project-1',
    title: 'Calculadora',
    level: 'iniciante',
    description: 'Uma calculadora de terminal que executa operações básicas: soma, subtração, multiplicação, divisão.',
    techs: ['Ruby puro', 'gets/puts', 'case/when'],
    details: 'Use case/when para escolher a operação. Trate divisão por zero. Loop até o usuário escolher sair.'
  },
  {
    id: 'project-2',
    title: 'Sistema de Cadastro',
    level: 'iniciante',
    description: 'Sistema CRUD para cadastrar usuários em memória com nome, email e idade.',
    techs: ['Arrays', 'Hashes', 'each'],
    details: 'Armazene usuários em um array de hashes. Implemente adicionar, listar, buscar e remover.'
  },
  {
    id: 'project-3',
    title: 'Agenda Telefônica',
    level: 'intermediario',
    description: 'Agenda completa com busca, edição, persistência em arquivo e interface de terminal.',
    techs: ['File I/O', 'Regex', 'Classes'],
    details: 'Use classes para Contato e Agenda. Persista em arquivo JSON. Valide telefone com regex.'
  },
  {
    id: 'project-4',
    title: 'Sistema Bancário',
    level: 'intermediario',
    description: 'Sistema bancário com contas, saques, depósitos, transferências e extrato.',
    techs: ['OOP', 'Composição', 'Enumerable'],
    details: 'Classes: Conta, Cliente, Transacao. Use composição. Gere extratos com each.'
  },
  {
    id: 'project-5',
    title: 'API REST com Sinatra',
    level: 'avancado',
    description: 'API RESTful para gerenciamento de tarefas usando Sinatra e JSON.',
    techs: ['Sinatra', 'JSON', 'HTTP', 'REST'],
    details: 'Rotas: GET, POST, PUT, DELETE. Dados em memória. Middleware para CORS.'
  },
  {
    id: 'project-6',
    title: 'Bot para Discord',
    level: 'avancado',
    description: 'Bot completo para Discord com comandos de moderação, música e diversão.',
    techs: ['discordrb', 'API', 'Eventos', 'Deploy'],
    details: 'Comandos: !ban, !kick, !clear, !play. Use discordrb gem. Host em serviço cloud.'
  }
];
