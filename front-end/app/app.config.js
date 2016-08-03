angular
    .module('app')
    .config(function($routeProvider, $locationProvider, $httpProvider) {
        $httpProvider.defaults.withCredentials = true;

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

        $routeProvider
        .when('/login', {
            templateUrl: 'login.html',
            controller: 'LoginController'
        })
        .when('/administracoes', {
            templateUrl: 'administracoes.html',
            controller: 'AdministracoesController'
        })
        .when('/cidades', {
            templateUrl: 'cidades.html',
            controller: 'CidadesController'
        })
        .when('/usuarios', {
            templateUrl: 'usuarios.html',
            controller: 'UsuariosController'
        })
        .when('/coletas/:cidade_slug', {
            templateUrl: 'coletas.html',
            controller: 'ColetasController'
        })
        .when('/informacoes-gerais', {
            templateUrl: 'informacoes-gerais.html',
            controller: 'CasasOracaoController'
        })
        .when('/', {
            templateUrl: 'informacoes-gerais.html',
            controller: 'CasasOracaoController'
        })
        .when('/projetos', {
            templateUrl: 'projetos.html',
            controller: 'CasasOracaoController'
        })
        .when('/confrontacao', {
            templateUrl: 'confrontacao.html',
            controller: 'CasasOracaoController'
        })
        .when('/documentos-propriedade', {
            templateUrl: 'documentos-propriedade.html',
            controller: 'CasasOracaoController'
        })
        .when('/manutencao-preventiva', {
            templateUrl: 'manutencao-preventiva.html',
            controller: 'CasasOracaoController'
        })
        .when('/terrenos', {
            templateUrl: 'terrenos.html',
            controller: 'TerrenosController'
        })
        .when('/resumos', {
            templateUrl: 'resumos.html',
            controller: 'ResumosController'
        });
});
