// ============================================================
// RUBYQUEST — Documentation Quick Reference
// ============================================================
// Organized by category: syntax, description, code example, optional doc link

const DOCS_DATA = [
  // ===== VARIABLES & CONSTANTS =====
  {
    title: 'Variável Local',
    category: 'variáveis',
    desc: 'Letra minúscula ou _. Escopo local ao bloco/método.',
    code: 'nome = "João"\nidade = 25\npreco = 49.99',
    url: 'https://ruby-doc.org/core-3.0.0/doc/syntax/assignment_rdoc.html'
  },
  {
    title: 'Variável Global',
    category: 'variáveis',
    desc: 'Prefixo $. Acessível de qualquer lugar. Evite usar.',
    code: '$contador = 0\n$config = "debug"',
    url: 'https://ruby-doc.org/core-3.0.0/doc/syntax/assignment_rdoc.html'
  },
  {
    title: 'Variável de Instância',
    category: 'variáveis',
    desc: 'Prefixo @. Pertence a uma instância de objeto.',
    code: '@nome = "Maria"\n@idade = 30',
    url: 'https://ruby-doc.org/core-3.0.0/doc/syntax/assignment_rdoc.html'
  },
  {
    title: 'Variável de Classe',
    category: 'variáveis',
    desc: 'Prefixo @@. Compartilhada por toda a hierarquia da classe.',
    code: '@@total = 0\n@@instancias = []',
    url: 'https://ruby-doc.org/core-3.0.0/doc/syntax/assignment_rdoc.html'
  },
  {
    title: 'Constante',
    category: 'variáveis',
    desc: 'Letra maiúscula. Ruby avisa se reatribuir, mas permite.',
    code: 'PI = 3.14159\nNOME_APP = "RubyQuest"\nMAX_TENTATIVAS = 3',
    url: 'https://ruby-doc.org/core-3.0.0/doc/syntax/assignment_rdoc.html'
  },
  {
    title: 'Atribuição Paralela',
    category: 'variáveis',
    desc: 'Múltiplas variáveis em uma linha. Troca de valores sem temporária.',
    code: 'a, b, c = 1, 2, 3\na, b = b, a  # troca valores',
    url: 'https://ruby-doc.org/core-3.0.0/doc/syntax/assignment_rdoc.html'
  },
  {
    title: 'Atribuição Condicional (||=)',
    category: 'variáveis',
    desc: 'Só atribui se a variável for nil ou false (memoização).',
    code: 'cache ||= "calculado"\n@total ||= 0',
    url: 'https://ruby-doc.org/core-3.0.0/doc/syntax/assignment_rdoc.html'
  },
  {
    title: 'puts vs print vs p',
    category: 'variáveis',
    desc: 'puts: com \\n. print: sem \\n. p: representação inspecionada.',
    code: 'puts "Olá"      # Olá\\n\nprint "Olá"     # Olá\np "Olá"         # "Olá" (com aspas)',
    url: 'https://ruby-doc.org/core-3.0.0/Kernel.html#method-i-puts'
  },

  // ===== DATA TYPES =====
  {
    title: 'Integer',
    category: 'tipos',
    desc: 'Números inteiros. Suporta tamanho arbitrário (BigNum automático).',
    code: 'idade = 25\nhex = 0xFF        # 255\nbin = 0b1111      # 15\npop = 1_000_000   # legível',
    url: 'https://ruby-doc.org/core-3.0.0/Integer.html'
  },
  {
    title: 'Float',
    category: 'tipos',
    desc: 'Números de ponto flutuante (decimais).',
    code: 'altura = 1.75\npi = 3.14159\ncient = 2.5e3  # 2500.0',
    url: 'https://ruby-doc.org/core-3.0.0/Float.html'
  },
  {
    title: 'String',
    category: 'tipos',
    desc: 'Texto. Aspas simples (sem interpolação) ou duplas (com interpolação).',
    code: 'nome = "Maria"\ns = \'Olá\'           # sem interpolação\n"Olá, #{nome}!"  # interpolação\n"Linha1\\nLinha2"  # escape',
    url: 'https://ruby-doc.org/core-3.0.0/String.html'
  },
  {
    title: 'Symbol',
    category: 'tipos',
    desc: 'String imutável e única na memória. Ideal para chaves de hash.',
    code: ':nome         # símbolo\n:user.email   # símbolo\n"nome".to_sym # :nome',
    url: 'https://ruby-doc.org/core-3.0.0/Symbol.html'
  },
  {
    title: 'Boolean (true/false)',
    category: 'tipos',
    desc: 'Apenas false e nil são falsy. Tudo mais é truthy (incluindo 0 e "").',
    code: 'ativo = true\nputs !!0     # true!\nputs !!" "   # true!\nputs !!nil   # false',
    url: 'https://ruby-doc.org/core-3.0.0/TrueClass.html'
  },
  {
    title: 'nil',
    category: 'tipos',
    desc: 'Ausência de valor. Use &. (safe navigation) para evitar erros.',
    code: 'valor = nil\nvalor.nil?     # true\nvalor&.upcase # nil (seguro)',
    url: 'https://ruby-doc.org/core-3.0.0/NilClass.html'
  },
  {
    title: 'Type Casting (Conversão)',
    category: 'tipos',
    desc: 'to_i, to_f, to_s, to_sym, to_a convertem entre tipos.',
    code: '"42".to_i    # 42\n42.to_s     # "42"\n42.9.to_i   # 42 (trunca)\n42.9.round  # 43',
    url: 'https://ruby-doc.org/core-3.0.0/doc/syntax/literals_rdoc.html'
  },

  // ===== OPERATORS =====
  {
    title: 'Aritméticos',
    category: 'operadores',
    desc: '+, -, *, /, %, **. Divisão de inteiros trunca o resultado.',
    code: '10 + 3   # 13\n10 / 3   # 3 (inteiro!)\n10 / 3.to_f  # 3.333...\n10 % 3   # 1\n2 ** 3   # 8',
    url: 'https://ruby-doc.org/core-3.0.0/doc/syntax/operators_rdoc.html'
  },
  {
    title: 'Comparação',
    category: 'operadores',
    desc: '==, !=, <, >, <=, >=, <=> (spaceship).',
    code: '10 == 10   # true\n1 <=> 2    # -1\n2 <=> 2    # 0\n3 <=> 2    # 1',
    url: 'https://ruby-doc.org/core-3.0.0/doc/syntax/operators_rdoc.html'
  },
  {
    title: 'Lógicos',
    category: 'operadores',
    desc: '&& (AND), || (OR), ! (NOT). Short-circuit: && para no false, || para no true.',
    code: 'a && b    # AND\na || b    # OR\n!a        # NOT\nfalse && (raise "não")  # false',
    url: 'https://ruby-doc.org/core-3.0.0/doc/syntax/operators_rdoc.html'
  },
  {
    title: 'Atribuição Composta',
    category: 'operadores',
    desc: '+=, -=, *=, /=, %=, **=. Atalhos para operar e atribuir.',
    code: 'x = 10\nx += 5   # 15\nx -= 3   # 12\nx *= 2   # 24',
    url: 'https://ruby-doc.org/core-3.0.0/doc/syntax/operators_rdoc.html'
  },
  {
    title: 'Ranges',
    category: 'operadores',
    desc: '.. (inclusivo), ... (exclusivo no final).',
    code: '(1..5).to_a    # [1,2,3,4,5]\n(1...5).to_a   # [1,2,3,4]\n("a".."e").to_a  # ["a","b","c","d","e"]',
    url: 'https://ruby-doc.org/core-3.0.0/Range.html'
  },
  {
    title: 'Operador Ternário',
    category: 'operadores',
    desc: 'condição ? valor_verdadeiro : valor_falso. Compacto para if/else.',
    code: 'idade >= 18 ? "Adulto" : "Jovem"\nnota >= 7 ? "Aprovado" : "Reprovado"',
    url: 'https://ruby-doc.org/core-3.0.0/doc/syntax/control_expressions_rdoc.html'
  },

  // ===== CONDITIONALS =====
  {
    title: 'if/elsif/else',
    category: 'condicionais',
    desc: 'Estrutura condicional. elsif (sem "e" extra). Feche com end.',
    code: 'if nota >= 90\n  "Excelente"\nelsif nota >= 70\n  "Bom"\nelse\n  "Estude mais"\nend',
    url: 'https://ruby-doc.org/core-3.0.0/doc/syntax/control_expressions_rdoc.html'
  },
  {
    title: 'unless',
    category: 'condicionais',
    desc: 'Executa SE a condição for falsa. Inline é elegante para guard clauses.',
    code: 'unless idade >= 18\n  puts "Menor"\nend\n\nputs "Negado" unless usuario.admin?',
    url: 'https://ruby-doc.org/core-3.0.0/doc/syntax/control_expressions_rdoc.html'
  },
  {
    title: 'case/when',
    category: 'condicionais',
    desc: 'Switch do Ruby. Suporta ranges, múltiplos valores, ===.',
    code: 'case nota\nwhen 0..59 then "Reprovado"\nwhen 60..89 then "Aprovado"\nwhen 90..100 then "Excelente"\nend',
    url: 'https://ruby-doc.org/core-3.0.0/doc/syntax/control_expressions_rdoc.html'
  },
  {
    title: 'If/Unless Modificador',
    category: 'condicionais',
    desc: 'Condicional inline no final da linha. Muito usado em Ruby.',
    code: 'puts "Maior" if idade >= 18\nputs "Menor" unless idade >= 18',
    url: 'https://ruby-doc.org/core-3.0.0/doc/syntax/control_expressions_rdoc.html'
  },

  // ===== LOOPS =====
  {
    title: 'while',
    category: 'loops',
    desc: 'Executa ENQUANTO a condição for verdadeira.',
    code: 'i = 0\nwhile i < 5\n  puts i\n  i += 1\nend',
    url: 'https://ruby-doc.org/core-3.0.0/doc/syntax/control_expressions_rdoc.html'
  },
  {
    title: 'until',
    category: 'loops',
    desc: 'Executa ATÉ que a condição seja verdadeira (oposto de while).',
    code: 'i = 0\nuntil i >= 5\n  puts i\n  i += 1\nend',
    url: 'https://ruby-doc.org/core-3.0.0/doc/syntax/control_expressions_rdoc.html'
  },
  {
    title: 'each',
    category: 'loops',
    desc: 'Iteração principal em Ruby. Prefira a for. Bloco {} ou do/end.',
    code: '[1, 2, 3].each { |n| puts n * 2 }\n\n{nome: "Ana"}.each do |k, v|\n  puts "#{k}: #{v}"\nend',
    url: 'https://ruby-doc.org/core-3.0.0/Array.html#method-i-each'
  },
  {
    title: 'times',
    category: 'loops',
    desc: 'Executa um bloco N vezes. Contador começa em 0.',
    code: '3.times { puts "Ruby!" }\n5.times { |i| print i }  # 01234',
    url: 'https://ruby-doc.org/core-3.0.0/Integer.html#method-i-times'
  },
  {
    title: 'loop/break/next',
    category: 'loops',
    desc: 'loop infinito controlado. break sai, next pula iteração.',
    code: 'loop do\n  break if condicao\nend\n\n(1..5).each do |n|\n  next if n.even?\n  puts n  # 1, 3, 5\nend',
    url: 'https://ruby-doc.org/core-3.0.0/doc/syntax/control_expressions_rdoc.html'
  },

  // ===== METHODS =====
  {
    title: 'Definindo Métodos',
    category: 'métodos',
    desc: 'def/end. Retorno implícito (última expressão).',
    code: 'def soma(a, b)\n  a + b  # return implícito\nend\n\ndef maior(a, b)\n  return a if a > b\n  b\nend',
    url: 'https://ruby-doc.org/core-3.0.0/doc/syntax/methods_rdoc.html'
  },
  {
    title: 'Parâmetros com Valor Padrão',
    category: 'métodos',
    desc: 'Parâmetros opcionais com valor default.',
    code: 'def saudacao(nome = "mundo")\n  "Olá, #{nome}!"\nend\n\nsaudacao        # "Olá, mundo!"\nsaudacao("Ana")  # "Olá, Ana!"',
    url: 'https://ruby-doc.org/core-3.0.0/doc/syntax/methods_rdoc.html'
  },
  {
    title: 'Keyword Arguments',
    category: 'métodos',
    desc: 'Parâmetros nomeados. Ordem não importa. Preferível a hashes.',
    code: 'def criar_user(nome:, email:, idade: nil)\n  "#{nome} - #{email}"\nend\n\ncriar_user(nome: "João", email: "j@e.co")',
    url: 'https://ruby-doc.org/core-3.0.0/doc/syntax/methods_rdoc.html'
  },
  {
    title: 'Splat (*)',
    category: 'métodos',
    desc: 'Captura número variável de argumentos em um array.',
    code: 'def lista(*itens)\n  itens.join(", ")\nend\n\nlista(1, 2, 3)     # "1, 2, 3"\nlista("a", "b")    # "a, b"',
    url: 'https://ruby-doc.org/core-3.0.0/doc/syntax/methods_rdoc.html'
  },
  {
    title: 'Method Chaining',
    category: 'métodos',
    desc: 'Encadeamento de métodos. Cada método retorna self.',
    code: '"ruby".upcase.reverse          # "YBUR"\n\n[3, 1, 4, 1].sort.reverse.map { |n| n * 2 }',
    url: 'https://ruby-doc.org/core-3.0.0/doc/syntax/methods_rdoc.html'
  },

  // ===== BLOCKS, PROCS & LAMBDAS =====
  {
    title: 'Blocos ({ } e do/end)',
    category: 'blocos',
    desc: 'Código anônimo passado p/ métodos. {} para 1 linha, do/end para várias.',
    code: '[1, 2].each { |n| puts n * 2 }\n\n[1, 2].each do |n|\n  puts n * 2\nend',
    url: 'https://ruby-doc.org/core-3.0.0/doc/syntax/methods_rdoc.html#label-Block'
  },
  {
    title: 'yield',
    category: 'blocos',
    desc: 'Chama o bloco recebido. Use block_given? para verificar.',
    code: 'def executar\n  yield if block_given?\nend\n\nexecutar { puts "Olá!" }',
    url: 'https://ruby-doc.org/core-3.0.0/doc/syntax/methods_rdoc.html#label-Block'
  },
  {
    title: 'Proc',
    category: 'blocos',
    desc: 'Bloco "salvo" em objeto. call para executar. Não verifica args.',
    code: 'dobro = Proc.new { |n| n * 2 }\ndobro.call(5)  # 10\n\ntriplo = proc { |n| n * 3 }\ntriplo.call(3)  # 9',
    url: 'https://ruby-doc.org/core-3.0.0/Proc.html'
  },
  {
    title: 'Lambda',
    category: 'blocos',
    desc: 'Proc que verifica args e trata return como método (mais seguro).',
    code: 'dobro = ->(n) { n * 2 }\ndobro.call(5)  # 10\n\n# vs Proc:\n# Proc.new { |a,b| } aceita 1 arg\n# ->(a,b) { } exige 2 args',
    url: 'https://ruby-doc.org/core-3.0.0/Proc.html'
  },
  {
    title: '& (bloco para Proc)',
    category: 'blocos',
    desc: '& captura o bloco como Proc. Também converte Proc em bloco.',
    code: 'def executa(&bloco)\n  bloco.call\nend\n\nexecuta { puts "oi" }\n\n[1, 2].map(&:to_s)  # ["1", "2"]',
    url: 'https://ruby-doc.org/core-3.0.0/doc/syntax/methods_rdoc.html#label-Block'
  },

  // ===== ARRAYS =====
  {
    title: 'Array: Criação',
    category: 'arrays',
    desc: 'Coleção ordenada. Tipos mistos. Índices começam em 0.',
    code: 'nums = [1, 2, 3]\nmisto = [1, "dois", :tres]\nvazio = []\nletras = %w[a b c]  # sem aspas',
    url: 'https://ruby-doc.org/core-3.0.0/Array.html'
  },
  {
    title: 'Array: Acesso',
    category: 'arrays',
    desc: 'Índice positivo (início) ou negativo (final). Range para fatia.',
    code: 'a = [1, 2, 3, 4, 5]\na[0]      # 1\na[-1]     # 5\na[1..3]   # [2, 3, 4]\na.first   # 1\na.last    # 5',
    url: 'https://ruby-doc.org/core-3.0.0/Array.html'
  },
  {
    title: 'Array: Manipulação',
    category: 'arrays',
    desc: 'push/pop (final), unshift/shift (início), insert/delete.',
    code: 'a = [1, 2]\na.push(3)    # [1, 2, 3]\na.pop        # 3\na.unshift(0) # [0, 1, 2]\na.shift      # 0',
    url: 'https://ruby-doc.org/core-3.0.0/Array.html'
  },
  {
    title: 'Array: Métodos Úteis',
    category: 'arrays',
    desc: 'length, include?, join, flatten, uniq, sort, reverse.',
    code: '[1, 2, 3].length      # 3\n[1, nil].compact    # [1]\n[1, [2]].flatten    # [1, 2]\n[1, 1, 2].uniq      # [1, 2]',
    url: 'https://ruby-doc.org/core-3.0.0/Array.html'
  },

  // ===== HASHES =====
  {
    title: 'Hash: Criação',
    category: 'hashes',
    desc: 'Pares chave-valor. Sintaxe moderna { key: value } ou =>.',
    code: 'user = { nome: "Ana", idade: 30 }\nuser2 = { "nome" => "João" }\nvazio = {}\nHash.new(0)  # valor padrão 0',
    url: 'https://ruby-doc.org/core-3.0.0/Hash.html'
  },
  {
    title: 'Hash: Acesso e Modificação',
    category: 'hashes',
    desc: 'Acesse com [], atribua com []=. Valores padrão com Hash.new.',
    code: 'h = { a: 1, b: 2 }\nh[:a]          # 1\nh[:c] = 3      # adiciona\nh.keys         # [:a, :b, :c]\nh.values       # [1, 2, 3]',
    url: 'https://ruby-doc.org/core-3.0.0/Hash.html'
  },
  {
    title: 'Hash: Métodos Úteis',
    category: 'hashes',
    desc: 'merge, invert, transform_keys, fetch, dig.',
    code: '{a: 1}.merge({b: 2})  # {a:1, b:2}\n{a:1, b:2}.invert      # {1=>:a, 2=>:b}\nh.fetch(:x, "padrão")  # "padrão"\nh.dig(:a, :b)          # nil seguro',
    url: 'https://ruby-doc.org/core-3.0.0/Hash.html'
  },

  // ===== ENUMERABLE =====
  {
    title: 'map / collect',
    category: 'enumerable',
    desc: 'Transforma cada elemento. Retorna novo array.',
    code: '[1, 2, 3].map { |n| n * 2 }    # [2, 4, 6]\n["a", "b"].map(&:upcase)        # ["A", "B"]',
    url: 'https://ruby-doc.org/core-3.0.0/Enumerable.html#method-i-map'
  },
  {
    title: 'select / reject',
    category: 'enumerable',
    desc: 'select: filtra elementos que satisfazem. reject: oposto.',
    code: '[1,2,3,4,5].select(&:even?)      # [2, 4]\n[1,2,3,4,5].reject(&:even?)      # [1, 3, 5]',
    url: 'https://ruby-doc.org/core-3.0.0/Enumerable.html#method-i-select'
  },
  {
    title: 'reduce / inject',
    category: 'enumerable',
    desc: 'Acumula valores. Primeiro arg é valor inicial.',
    code: '[1, 2, 3].reduce(0) { |acc, n| acc + n }  # 6\n[1, 2, 3].reduce(:+)                           # 6\n[1, 2, 3].inject(:*)                           # 6',
    url: 'https://ruby-doc.org/core-3.0.0/Enumerable.html#method-i-reduce'
  },
  {
    title: 'sort / sort_by',
    category: 'enumerable',
    desc: 'Ordena. sort_by aceita bloco para critério.',
    code: '[3, 1, 2].sort                  # [1, 2, 3]\n[3, 1, 2].sort { |a,b| b <=> a }  # [3, 2, 1]\npessoas.sort_by { |p| p[:nome] }',
    url: 'https://ruby-doc.org/core-3.0.0/Enumerable.html#method-i-sort'
  },
  {
    title: 'group_by / partition',
    category: 'enumerable',
    desc: 'group_by: agrupa em hash. partition: divide em 2 arrays.',
    code: '[1,2,3,4].group_by(&:even?)\n  # {false=>[1,3], true=>[2,4]}\n\n[1,2,3,4].partition(&:even?)\n  # [[2,4], [1,3]]',
    url: 'https://ruby-doc.org/core-3.0.0/Enumerable.html#method-i-group_by'
  },
  {
    title: 'any? / all? / none? / one?',
    category: 'enumerable',
    desc: 'Consultas booleanas: algum, todos, nenhum, exatamente um.',
    code: '[1, 2, 3].any? { |n| n > 2 }   # true\n[1, 2, 3].all? { |n| n > 0 }   # true\n[1, 2, 3].none? { |n| n < 0 }  # true',
    url: 'https://ruby-doc.org/core-3.0.0/Enumerable.html'
  },

  // ===== STRINGS =====
  {
    title: 'String: Métodos Comuns',
    category: 'strings',
    desc: 'upcase, downcase, capitalize, length, reverse, split, strip.',
    code: '"ruby".upcase       # "RUBY"\n"ruby".capitalize  # "Ruby"\n"ruby".reverse     # "ybur"\n"a b".split        # ["a", "b"]',
    url: 'https://ruby-doc.org/core-3.0.0/String.html'
  },
  {
    title: 'String: Interpolação',
    category: 'strings',
    desc: '#{expressão} dentro de aspas duplas. Chama to_s automaticamente.',
    code: 'nome = "Ana"\n"Olá, #{nome}!"       # "Olá, Ana!"\n"2 + 2 = #{2 + 2}"  # "2 + 2 = 4"',
    url: 'https://ruby-doc.org/core-3.0.0/String.html'
  },
  {
    title: 'String: Heredoc',
    category: 'strings',
    desc: 'Texto multilinha. <<~ remove indentação. <<- preserva.',
    code: 'texto = <<~TEXTO\n  Linha 1\n  Linha 2\nTEXTO',
    url: 'https://ruby-doc.org/core-3.0.0/doc/syntax/literals_rdoc.html'
  },

  // ===== CLASSES & OBJECTS =====
  {
    title: 'Classe Básica',
    category: 'oo',
    desc: 'def/end. initialize é o construtor. @var é variável de instância.',
    code: 'class Pessoa\n  def initialize(nome)\n    @nome = nome\n  end\n\n  def apresentar\n    "Olá, eu sou #{@nome}"\n  end\nend',
    url: 'https://ruby-doc.org/core-3.0.0/doc/syntax/classes_and_modules_rdoc.html'
  },
  {
    title: 'attr_accessor / reader / writer',
    category: 'oo',
    desc: 'Atalhos para getters e setters. reader (leitura), writer (escrita), accessor (ambos).',
    code: 'class Produto\n  attr_accessor :nome, :preco\n  attr_reader :codigo\n  attr_writer :desconto\nend',
    url: 'https://ruby-doc.org/core-3.0.0/Module.html#method-i-attr_accessor'
  },
  {
    title: 'Herança (<)',
    category: 'oo',
    desc: 'Herança simples. Classe filha herda métodos do pai. super chama o pai.',
    code: 'class Animal\n  def som = "..."\nend\n\nclass Cachorro < Animal\n  def som = "Au au!"\nend',
    url: 'https://ruby-doc.org/core-3.0.0/doc/syntax/classes_and_modules_rdoc.html'
  },
  {
    title: 'Módulos (include/extend)',
    category: 'oo',
    desc: 'include: métodos de instância. extend: métodos de classe.',
    code: 'module Voador\n  def voar = "Voando!"\nend\n\nclass Pato\n  include Voador  # instância\nend\n\nclass Aviao\n  extend Voador   # classe\nend',
    url: 'https://ruby-doc.org/core-3.0.0/doc/syntax/modules_rdoc.html'
  },

  // ===== EXCEPTIONS =====
  {
    title: 'begin/rescue/ensure',
    category: 'exceções',
    desc: 'begin tenta código. rescue captura erro. ensure sempre executa.',
    code: 'begin\n  resultado = 10 / 0\nrescue ZeroDivisionError => e\n  puts "Erro: #{e.message}"\nensure\n  puts "Sempre executa!"\nend',
    url: 'https://ruby-doc.org/core-3.0.0/doc/syntax/exceptions_rdoc.html'
  },
  {
    title: 'raise',
    category: 'exceções',
    desc: 'Lança exceção manualmente. Aceita mensagem ou classe.',
    code: 'raise "Algo deu errado!"\nraise ArgumentError, "Inválido"\n\nclass MeuErro < StandardError; end\nraise MeuErro, "Erro específico"',
    url: 'https://ruby-doc.org/core-3.0.0/doc/syntax/exceptions_rdoc.html'
  },
  {
    title: 'retry',
    category: 'exceções',
    desc: 'Dentro de rescue, reinicia o bloco begin. Cuidado com loops!',
    code: 'tentativas = 0\nbegin\n  tentativas += 1\n  raise "Falha" if tentativas < 3\nrescue\n  retry\nend',
    url: 'https://ruby-doc.org/core-3.0.0/doc/syntax/exceptions_rdoc.html'
  },

  // ===== FILE I/O =====
  {
    title: 'File.read / File.write',
    category: 'arquivos',
    desc: 'Leitura/escrita simples. Carrega tudo na memória.',
    code: 'conteudo = File.read("arquivo.txt")\nFile.write("saida.txt", "Olá!\\n")\n\nFile.open("arquivo.txt", "r") { |f| puts f.read }',
    url: 'https://ruby-doc.org/core-3.0.0/File.html'
  },
  {
    title: 'File.open com Bloco',
    category: 'arquivos',
    desc: 'Bloco fecha automaticamente. Modos: r, w, a, r+.',
    code: 'File.open("log.txt", "a") do |f|\n  f.puts "Log: #{Time.now}"\nend\n\nFile.foreach("dados.txt") { |l| puts l }',
    url: 'https://ruby-doc.org/core-3.0.0/File.html'
  },
  {
    title: 'Dir',
    category: 'arquivos',
    desc: 'Manipulação de diretórios. glob aceita padrões shell.',
    code: 'Dir.entries(".")\nDir.glob("*.rb")\nDir.mkdir("pasta")\nDir.chdir("pasta") { puts Dir.pwd }',
    url: 'https://ruby-doc.org/core-3.0.0/Dir.html'
  },
  {
    title: 'CSV',
    category: 'arquivos',
    desc: 'Biblioteca padrão para CSV. Não precisa instalar gem.',
    code: 'require "csv"\n\nCSV.foreach("dados.csv", headers: true) do |l|\n  puts l["nome"]\nend\n\nCSV.open("n.csv", "w") { |c| c << ["nome"] }',
    url: 'https://ruby-doc.org/stdlib-3.0.0/libdoc/csv/rdoc/CSV.html'
  },

  // ===== REGEX =====
  {
    title: 'Regex Básico',
    category: 'regex',
    desc: '// para criar. =~ testa (retorna posição ou nil). !~ nega.',
    code: '/ruby/ =~ "ruby"      # 0\n/Ruby/i =~ "ruby"    # 0 (case insensitive)\n"Python" !~ /ruby/  # true',
    url: 'https://ruby-doc.org/core-3.0.0/Regexp.html'
  },
  {
    title: 'match / scan',
    category: 'regex',
    desc: 'match: primeira ocorrência (MatchData). scan: todas (Array).',
    code: '"a@b.com".match(/\\w+@\\w+\\.\\w+/)    # MatchData\n"a@b.com c@d.com".scan(/\\w+@\\w+\\.\\w+/)  # ["a@b.com", "c@d.com"]',
    url: 'https://ruby-doc.org/core-3.0.0/Regexp.html'
  },
  {
    title: 'sub / gsub',
    category: 'regex',
    desc: 'sub: substitui primeira. gsub: substitui todas. Aceita bloco.',
    code: '"Ruby Ruby".sub("Ruby", "Go")         # "Go Ruby"\n"Ruby Ruby".gsub("Ruby", "Go")        # "Go Go"\n"a1b2".gsub(/\\d+/) { |n| n.to_i * 2 }',
    url: 'https://ruby-doc.org/core-3.0.0/String.html#method-i-gsub'
  }
];
