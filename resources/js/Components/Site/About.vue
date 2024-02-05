<template>
    <div class="container">
<!--        <h1 class="title">Serviços</h1>-->
        <section>
                    <n-carousel
                        effect="card"
                        prev-slide-style="transform: translateX(-150%) translateZ(-800px);"
                        next-slide-style="transform: translateX(50%) translateZ(-800px);"
                        style="height: 240px"
                        :show-dots="true"
                        trigger="click"
                        :current-index="index"
                    >
                    <n-carousel-item :style="{ width: $isMobile() ? '100%' : '60%' }" v-for="(item, key) in images" :key="key">
                        <img
                            class="carousel-img"
                            :src="item.image"
                        >
                    </n-carousel-item>
                    <template #dots="{currentIndex}">
                        <h1 class="mt-5" style="display: none">{{(index = currentIndex)}}</h1>
                    </template>
                </n-carousel>
        </section>
        <section class="mt-3 mb-3">
            <n-layout has-sider>
                <n-layout-sider
                    collapse-mode="transform"
                    :collapsed-width="20"
                    :width="400"
                    show-trigger="arrow-circle"
                    content-style="padding: 24px;"
                    bordered
                >
                    <div class="col-md-12 content" v-if="!$isMobile()">
                        <ul>
                            <li v-for="(item, i) in images" v-bind:class="(index === i) ? 'active' : '' " >
                                <a @click="(index = i)">{{item.name}}</a>
                                <n-divider style="margin-top: 0; margin-bottom: 0;"/>
                            </li>
                        </ul>
                    </div>
                    <div class="col-md-12 content" v-else>
                        <select class="custom-select" v-model="index">
                            <option v-for="(item, i) in images" v-bind:value="i">{{item.name}}</option>
                        </select>
                    </div>
                </n-layout-sider>
                <n-layout-content content-style="padding: 24px;">
                    <div class="container content">
                        <h1 class="title">{{images[index].name}}</h1>
                        <div class="context">
                            <div class="col-md-9 text">
                                <h1 class="text-center sub-title">{{images[index].title}}</h1>
                                <n-collapse default-expanded-names="0" accordion>
                                    <n-collapse-item title="Saiba Mais" name="1">
                                        <div>{{images[index].description}}</div>
                                    </n-collapse-item>
                                </n-collapse>


<!--                                <n-space vertical>-->
<!--                                    <n-switch v-model:value="show">-->
<!--                                        <template #checked>-->
<!--                                            Fechar-->
<!--                                        </template>-->
<!--                                        <template #unchecked style="color: #BF0811; font-weight: 900" class="btn-red">-->
<!--                                            <p class="btn-red">Saiba Mais</p>-->
<!--                                        </template>-->
<!--                                    </n-switch>-->
<!--                                    <n-collapse-transition :show="show">-->
<!--                                        <div>{{images[index].description}}</div>-->
<!--                                    </n-collapse-transition>-->
<!--                                </n-space>-->
                            </div>
                        </div>
                    </div>
                </n-layout-content>
            </n-layout>
        </section>
    </div>
</template>
<script setup>
import {NCarousel, NCarouselItem, NDivider, NSpace, NSwitch, NCollapseTransition, NLayout, NLayoutSider, NLayoutContent, NCollapse, NCollapseItem} from 'naive-ui';
import {computed, ref} from "vue";

let index =  ref(0);
let show = ref(false);

let current;
let last;


const images =
    [
        {id: 0, image: '/image/site/acessorios_hidraulicos_sistema_de_hidrantes.png', name: 'Acessorios Hidráulicos', title: 'A Fundação da Eficiência em Sistemas de Fluidos', description: 'Nos bastidores dos sistemas hidráulicos, onde a pressão e o fluxo de fluidos convergem para realizar uma variedade de tarefas, estão os acessórios hidráulicos. Essenciais e muitas vezes subestimados, esses componentes desempenham um papel fundamental na eficiência, segurança e funcionalidade de uma ampla gama de máquinas e processos industriais.\n' +
                '\n' +
                'Desde válvulas e conexões até filtros e acumuladores, os acessórios hidráulicos são a espinha dorsal dos sistemas de fluidos, garantindo que a energia hidráulica seja canalizada e controlada de forma precisa e confiável. Um dos elementos mais cruciais desses acessórios são as válvulas hidráulicas, que regulam o fluxo, a direção e a pressão do fluido, permitindo o controle preciso de atuadores e motores.\n' +
                '\n' +
                'Além das válvulas, as conexões hidráulicas são outro componente vital, fornecendo uma interface segura e hermética entre os diversos elementos do sistema. Seja por meio de roscas, flanges ou conexões rápidas, esses acessórios garantem a integridade estrutural e a eficiência do sistema, minimizando vazamentos e perdas de pressão.\n' +
                '\n' +
                'Os filtros hidráulicos também desempenham um papel crítico na manutenção da pureza do fluido, removendo impurezas e contaminantes que podem comprometer a operação do sistema e causar danos aos componentes. Ao prolongar a vida útil dos componentes e garantir um desempenho consistente, esses acessórios desempenham um papel vital na redução dos custos de manutenção e no aumento da confiabilidade operacional.\n' +
                '\n' +
                'Além disso, os acumuladores hidráulicos são essenciais para armazenar energia e amortecer picos de pressão, protegendo o sistema contra sobrecargas e choques hidráulicos. Seja para fornecer energia auxiliar em emergências ou para suavizar as oscilações de pressão durante o funcionamento normal, esses acessórios desempenham um papel crucial na otimização do desempenho e na segurança do sistema.\n' +
                '\n' +
                'Em resumo, os acessórios hidráulicos são os pilares que sustentam a eficiência e a confiabilidade dos sistemas de fluidos. Ao fornecer controle preciso, vedação confiável, filtragem eficaz e armazenamento de energia, esses componentes desempenham um papel vital em uma ampla gama de aplicações industriais, desde máquinas pesadas até sistemas de controle de processos. Sem eles, o poder dos sistemas hidráulicos seria difícil de controlar e gerenciar, destacando sua importância fundamental na engenharia moderna.'},
        {id: 1, image: '/image/site/bicos_de_sprinklers.png', name: 'Bicos de Sprinklers', title: 'A Chave para a Proteção Contra Incêndios', description: 'Nos domínios da segurança contra incêndios, os bicos de sprinklers representam uma linha de defesa vital, pronta para entrar em ação no momento crucial. Estes pequenos, porém poderosos dispositivos são a espinha dorsal dos sistemas de sprinklers, fornecendo uma resposta rápida e eficaz para conter e extinguir incêndios antes que causem danos significativos.\n' +
                '\n' +
                'Os bicos de sprinklers são projetados para liberar água de maneira controlada e direcionada quando detectam temperaturas elevadas, sinalizando a presença de um incêndio iminente. Sua construção precisa e engenharia meticulosa garantem que a água seja distribuída de forma eficiente e abrangente, cobrindo a área afetada e suprimindo as chamas antes que possam se espalhar.\n' +
                '\n' +
                'Uma das características mais importantes dos bicos de sprinklers é sua capacidade de se adaptar a uma variedade de ambientes e condições. Desde ambientes industriais até espaços comerciais e residenciais, esses dispositivos estão disponíveis em uma ampla gama de designs e configurações para atender às necessidades específicas de cada aplicação. Seja por meio de bicos de respostas rápidas para proteger áreas sensíveis ou bicos de alta capacidade para suprimir incêndios em grandes espaços, a variedade de opções disponíveis garante que cada sistema de sprinklers seja adaptado com precisão às demandas de segurança de seu ambiente.\n' +
                '\n' +
                'Além disso, os bicos de sprinklers são projetados para serem altamente confiáveis e de baixa manutenção, garantindo que estejam prontos para entrar em ação quando mais necessários. Com materiais resistentes à corrosão e tecnologia de detecção avançada, esses dispositivos são capazes de suportar as condições mais adversas e oferecer desempenho consistente ao longo do tempo.\n' +
                '\n' +
                'Em última análise, os bicos de sprinklers representam mais do que simples dispositivos de segurança; são guardiões silenciosos, prontos para proteger vidas e propriedades contra os devastadores efeitos do fogo. Seja em edifícios comerciais, industriais ou residenciais, sua presença discreta é um lembrete constante do compromisso contínuo com a segurança e a proteção contra incêndios.'},
        {id: 2, image: '/image/site/extintores.png', name: 'Extintores', title: 'Salvaguardando Vidas e Propriedades Contra o Fogo', description:
                'Em um mundo onde o fogo é uma ameaça constante, os extintores representam uma defesa essencial contra a devastação e o caos. Esses dispositivos compactos, mas poderosos, são fundamentais para a segurança contra incêndios, oferecendo uma resposta rápida e eficaz no combate às chamas antes que possam se espalhar e causar danos irreparáveis.\n' +
                '\n' +
                'Os extintores funcionam liberando agentes extintores, como água, espuma, pó químico ou dióxido de carbono (CO2), que suprimem o fogo removendo um ou mais dos elementos essenciais para sua propagação. Seja resfriando as chamas, abafando-as com agentes químicos ou eliminando o oxigênio necessário para a combustão, esses dispositivos são projetados para extinguir incêndios de forma eficaz e segura.\n' +
                '\n' +
                'Um dos aspectos mais importantes dos extintores é sua versatilidade e adaptabilidade a uma variedade de classes de incêndio. Desde incêndios em materiais sólidos, como madeira e papel, até incêndios em líquidos inflamáveis e equipamentos elétricos, existem extintores projetados especificamente para lidar com cada tipo de situação. Essa diversidade garante que os extintores sejam eficazes em uma ampla gama de cenários, oferecendo uma resposta rápida e precisa, independentemente da natureza do incêndio.\n' +
                '\n' +
                'Além disso, os extintores são projetados para serem intuitivos e fáceis de usar, permitindo que até mesmo pessoas sem treinamento específico possam empregá-los com eficácia em uma emergência. Com instruções simples e controles acessíveis, esses dispositivos capacitam indivíduos a agir rapidamente para controlar pequenos incêndios antes que se tornem incontroláveis.\n' +
                '\n' +
                'No entanto, a eficácia dos extintores depende não apenas de sua disponibilidade e acessibilidade, mas também de uma manutenção regular e inspeção cuidadosa. É essencial que esses dispositivos sejam mantidos em condições de funcionamento adequadas, com pressão adequada, agentes extintores intactos e válvulas de liberação operacionais. Somente assim eles podem cumprir sua missão vital de proteger vidas e propriedades contra os perigos do fogo.\n' +
                '\n' +
                'Em resumo, os extintores são mais do que simples dispositivos de combate a incêndios; são guardiões silenciosos, prontos para entrar em ação e extinguir as chamas da destruição. Com sua presença discreta, mas vital, eles oferecem tranquilidade e segurança, garantindo que, em face do perigo, haja sempre uma linha de defesa pronta para intervir e proteger o que mais valorizamos.'},
        {id: 3, image: '/image/site/luminarias_para_iluminacao_de_emergencia.png', name: 'Luminárias para Iluminação de Emergência', title: 'Luz na Escuridão', description:
                '\n' +
                'Quando a escuridão ameaça, as luminárias de iluminação de emergência são faróis de esperança, garantindo que mesmo nos momentos mais sombrios, haja luz para guiar o caminho. Esses dispositivos são projetados para fornecer iluminação confiável e duradoura em situações de emergência, garantindo a segurança e orientação de pessoas em edifícios, túneis, áreas industriais e outros espaços críticos.\n' +
                '\n' +
                'As luminárias de iluminação de emergência são instaladas estrategicamente em locais onde a iluminação padrão pode falhar durante uma emergência, como saídas de emergência, corredores e escadas. Equipadas com baterias recarregáveis ou baterias de longa duração, essas luminárias permanecem em modo de espera, prontas para entrar em ação no momento em que a energia principal falhar.\n' +
                '\n' +
                'Uma das características mais importantes dessas luminárias é sua capacidade de fornecer iluminação adequada mesmo em condições adversas, como fumaça densa ou falta de energia elétrica. Com tecnologia LED de alta eficiência energética, esses dispositivos oferecem uma fonte de luz brilhante e duradoura, garantindo visibilidade suficiente para evacuação segura e orientação em direção às saídas.\n' +
                '\n' +
                'Além disso, as luminárias de iluminação de emergência são projetadas para serem duráveis e de baixa manutenção, garantindo que estejam prontas para operar quando mais necessárias. Construídas com materiais resistentes a impactos e intempéries, essas luminárias são capazes de suportar as condições mais adversas e oferecer desempenho confiável em situações críticas.\n' +
                '\n' +
                'É essencial que as luminárias de iluminação de emergência sejam instaladas de acordo com as normas e regulamentos locais, garantindo que atendam aos requisitos de segurança e conformidade. Além disso, testes regulares e manutenção adequada são fundamentais para garantir que esses dispositivos estejam sempre prontos para operar quando necessário, oferecendo tranquilidade e segurança em situações de emergência.\n' +
                '\n' +
                'Em resumo, as luminárias de iluminação de emergência desempenham um papel vital na segurança de edifícios e espaços públicos, oferecendo uma fonte de luz confiável quando mais necessária. Com sua presença discreta e poderosa, esses dispositivos são uma garantia de que, mesmo nas horas mais escuras, haverá sempre uma luz para guiar o caminho rumo à segurança.'},
        {id: 4, image: '/image/site/manuteca_em_todos_os_sistemas.png', name: 'Manutenção em Todos os Sistemas', title:'Garantindo Eficiência e Confiabilidade', description: 'Na complexa teia de sistemas que sustentam nossas vidas modernas, a manutenção é a cola que mantém tudo funcionando sem problemas. Dos sistemas de energia aos sistemas de transporte, da tecnologia de informação aos sistemas de água e saneamento, a manutenção é a chave para garantir eficiência operacional, prolongar a vida útil dos equipamentos e garantir a segurança de todos os envolvidos.\n' +
                '\n' +
                'A manutenção abrange uma ampla gama de atividades, desde inspeções preventivas e reparos corretivos até atualizações e modernizações de sistemas. Em todos os casos, o objetivo é o mesmo: identificar e corrigir problemas antes que se tornem grandes o suficiente para causar interrupções ou falhas catastróficas.'
        + 'Ao investir na manutenção preventiva e corretiva de sistemas críticos, podemos garantir sua eficiência, confiabilidade e segurança a longo prazo, garantindo que continuem a servir as necessidades de todos aqueles que dependem deles.'},
        {id: 5, image: '/image/site/materiais_para_alarme_de_incendio.png', name: 'Materiais para Alarme de Incêndio', title: ' Fundamentais para a Segurança Contra Incêndios', description:
                '\n' +
                'Nos sistemas de alarme de incêndio, cada componente desempenha um papel crucial na detecção precoce e na resposta rápida a emergências. Os materiais utilizados nesses sistemas são especialmente projetados para proporcionar confiabilidade, durabilidade e eficácia na detecção e sinalização de incêndios, garantindo assim a segurança das pessoas e a proteção do patrimônio.\n' +
                '\n' +
                '1. Detectores de Fumaça e Calor: Estes dispositivos são os olhos e ouvidos dos sistemas de alarme de incêndio, detectando sinais de fumaça ou calor e acionando o alarme. Os detectores de fumaça utilizam tecnologia óptica, iônica ou fotoelétrica para identificar partículas de fumaça no ar, enquanto os detectores de calor monitoram o aumento da temperatura ambiente. Ambos desempenham um papel vital na detecção precoce de incêndios, permitindo uma resposta rápida e eficaz.\n' +
                '\n' +
                '2. Sirenes e Sinalizadores Visuais: Uma vez detectado um incêndio, é essencial alertar as pessoas nas proximidades para que possam evacuar com segurança. As sirenes emitem sinais sonoros altos e penetrantes, enquanto os sinalizadores visuais, como luzes estroboscópicas ou LEDs, fornecem alertas visuais em ambientes barulhentos ou para pessoas com deficiência auditiva. Esses dispositivos são projetados para fornecer avisos claros e imediatos, ajudando a minimizar o tempo de reação e maximizar a segurança.\n' +
                '\n' +
                '3. Painéis de Controle e Monitoramento: Os painéis de controle são o cérebro do sistema de alarme de incêndio, recebendo sinais dos detectores e acionando os dispositivos de alerta apropriados. Esses painéis podem ser programados para monitorar diferentes zonas ou áreas de um edifício e fornecer informações detalhadas sobre a localização e a gravidade de um incêndio. Com sua capacidade de comunicação com serviços de emergência e sistemas de automação predial, esses painéis desempenham um papel crucial na coordenação da resposta a um incêndio.\n' +
                '\n' +
                '4. Cabeamento e Conexões:A infraestrutura de cabeamento é a espinha dorsal do sistema de alarme de incêndio, garantindo que todos os dispositivos estejam interconectados e operando de forma sincronizada. O cabeamento adequado, juntamente com conexões seguras e confiáveis, é essencial para garantir a integridade e a eficácia do sistema, minimizando o risco de falhas ou mau funcionamento.\n' +
                '\n' +
                '5. Baterias de Reserva: Em caso de falha de energia, as baterias de reserva garantem que o sistema de alarme de incêndio continue operando, garantindo assim a continuidade da proteção. Essas baterias são projetadas para fornecer energia de backup suficiente para manter os dispositivos de detecção e alerta operacionais por um período prolongado, garantindo que a segurança não seja comprometida durante quedas de energia prolongadas.\n' +
                '\n' +
                'Em resumo, os materiais utilizados nos sistemas de alarme de incêndio desempenham um papel fundamental na segurança e proteção contra incêndios. Com sua confiabilidade, durabilidade e eficácia, esses materiais garantem que os sistemas de alarme de incêndio estejam sempre prontos para detectar incêndios precocemente, alertar as pessoas nas proximidades e coordenar uma resposta rápida e eficaz, minimizando assim os danos e protegendo vidas e propriedades.'},
        {id: 6, image: '/image/site/placas_de_sinalizacao_de_emergencia.png', name: 'Placas de Sinalização de Emergencia', title: 'Orientação Vital em Momentos Críticos', description:
                'Nas situações mais urgentes, quando cada segundo conta, as placas de sinalização de emergência são faróis de orientação, guiando as pessoas para a segurança em meio ao caos. Esses sinais visuais desempenham um papel crucial na comunicação clara e eficaz de rotas de evacuação, localização de equipamentos de combate a incêndio e fornecimento de informações vitais em caso de emergência.\n' +
                '\n' +
                'As placas de sinalização de emergência vêm em uma variedade de formas, cores e designs, cada uma projetada para transmitir uma mensagem específica de forma rápida e intuitiva. Desde placas indicativas de saídas de emergência até placas de identificação de equipamentos de combate a incêndio e rotas de evacuação, esses sinais desempenham um papel vital na preparação e resposta a emergências.\n' +
                '\n' +
                'Uma das características mais importantes das placas de sinalização de emergência é sua visibilidade e legibilidade em condições adversas. Projetadas com cores vivas e contrastantes, letras grandes e ícones universais, essas placas são facilmente identificáveis mesmo em ambientes escuros, enfumaçados ou cheios de pânico. Isso permite que as pessoas localizem rapidamente rotas de evacuação, equipamentos de segurança e pontos de encontro designados, maximizando assim a eficácia da resposta a emergências.\n' +
                '\n' +
                'Além disso, as placas de sinalização de emergência são projetadas para serem duráveis e de fácil instalação, garantindo que estejam prontas para uso quando necessário. Construídas com materiais resistentes a impactos, chamas e produtos químicos, essas placas são capazes de suportar as condições mais adversas e oferecer orientação confiável em situações críticas.\n' +
                '\n' +
                'É essencial que as placas de sinalização de emergência sejam instaladas de acordo com as normas e regulamentos locais, garantindo que atendam aos requisitos de segurança e conformidade. Além disso, a manutenção regular e a inspeção cuidadosa desses sinais são fundamentais para garantir que permaneçam visíveis, legíveis e eficazes em todas as situações de emergência.\n' +
                '\n' +
                'Em resumo, as placas de sinalização de emergência são mais do que simples sinais; são guias vitais que podem fazer a diferença entre a vida e a morte em uma emergência. Com sua presença discreta e poderosa, esses sinais oferecem orientação vital quando mais necessária, garantindo que as pessoas possam encontrar segurança mesmo nos momentos mais críticos.'},
        // {id: 7, image: '/image/site/sistemas_completos_contra_incendio.png', name: 'Sistemas Completos Contra Incêndio', description: ''},
        // {id: 8, image: '/image/site/tudo_relacionado_as_solicitacoes_do_corpo_de_bombeiros.png', name: 'Tudo Relacionado as Solicitações do Corpo de Bombeiros', description: ''},
    ]

</script>

<style scoped>

.title{
    font-size:38px;
    font-weight: 700;
    color: #BF0811;
    text-align: center;
    padding: 10px;
}

.carousel-img {
    margin: 0 auto;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.content .title{
    font-size:25px;
    font-weight: 700;
    color: #BF0811;
    text-align: center;
    padding: 10px
}

.sub-title{
    font-size:20px;
    font-weight: 700;
    color: #BF0811;
    text-align: center;
    padding: 10px
}

.card {
    background: transparent !important;
    padding: 20px;
    //border-radius: 10px;
    margin-bottom: 1rem;
}

.card p {
    line-height: 1.75;
}

.context{
    display: flex;
    flex-direction: row;
    font-size: 18px;
    //height: 500px;

    @media (max-width: 1000px) {
        flex-direction: column;
    }
}

.context .text{
    padding: 20px;
    font-size:18px;
}

.content li {
    padding: 20px;
}
.content li a{
    color: #BF0811;
    font-weight: 500;
    text-decoration: none;
    cursor: pointer;
    //font-size: 18px;
}

.content li:hover{
    border-left: 3px solid #BF0811;
    color: #BF0811 !important;
    background-color:  #f0f8ff;
}

.content li:focus{
    color: #ffffff !important;
}

.content li a:hover{
    color: #BF0811 !important;
}

.content li a:focus{
    color: #ffffff !important;
}

.active{
    border: none;
    border-left: 3px solid #BF0811;
    color: #BF0811 !important;
    background-color:  #f0f8ff;
}

.active a{
    color: #BF0811 !important;
}
.active a:hover{
    color: #ffffff !important;
}

.custom-select{
    outline: none;
}

.custom-select:focus{
    border-color: transparent;
    outline: none;
}

.btn-red{
    color: #BF0811 !important;
    font-weight: 900;
}

</style>
