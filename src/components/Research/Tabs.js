import { Category, ChartComponent, AccumulationDataLabel, AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, ColumnSeries, DataLabel, Inject, Legend, LineSeries, PieSeries, SeriesCollectionDirective, SeriesDirective, Tooltip } from '@syncfusion/ej2-react-charts';
import React from "react";
import {Box, VStack, HStack, Text, Image, Button} from "@chakra-ui/react";
import {Link} from 'react-router-dom';


function PublicationTab() {
    return (
        <VStack spacing={String(window.screen.height / 50)} >
            <Text width="100%" style={{textAlign: 'center'}} fontSize={48} fontWeight={"bold"}>Publications</Text>
            <p style={{fontSize: '1.5em'}}>Add new Citations and update your current research information by clicking on the button below.</p>
            <Link to='/newCitation'>
                <Button
                    display={{ base: "none", md: "inline-flex" }}
                    fontSize={"sm"}
                    fontWeight={400}
                    fontFamily={("Poppins")}
                    color={"white"}
                    bg={"pink.400"}
                    _hover={{
                        bg: "pink.300",
                    }}
                >
                    Add Citation
                </Button>
            </Link>
            <Box borderRadius="lg" shadow="xl" padding="1%">
                <HStack shouldWrapChildren spacing={String(window.screen.width / 50)} maxWidth={String(window.screen.width * 0.9)} overflowX="scroll" >

                // 2017-2021 journal and conference publications
                <ChartComponent palettes={['#035ff0',"purple"]} border={ { width: 2, color: '#000000' }} title="Faculty publications" subTitle="Publications since 2017" chartArea={ { background: 'skyblue', width: '90%' }} primaryXAxis={ { valueType: 'Category' }} width={String(window.screen.width / 3)} height={String(window.screen.height / 2)}>
                    <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, LineSeries, Category]} />
                    <SeriesCollectionDirective>
                        <SeriesDirective dataSource={journalPubData} xName={"Year"} yName={"Publications"} type='Column' name='Journal' marker={{dataLabel:{visible:true}}} animation={{ enable: true, duration: 1200, delay: 100 }} />
                        <SeriesDirective dataSource={conferencePubData} xName={"Year"} yName={"Publications"} type='Column' name='Conference' marker={{dataLabel:{visible:true}}} animation={{ enable: true, duration: 1200, delay: 100 }} />
                    </SeriesCollectionDirective>
                </ChartComponent>

                // 2020-2021 journal and conference publications
                <ChartComponent palettes={['#035ff0',"purple"]} border={ { width: 2, color: '#000000' }} title="Recent publications" subTitle="Publications 2020-2021" chartArea={ { background: 'skyblue', width: '90%' }} primaryXAxis={ { valueType: 'Category' }} width={String(window.screen.width / 3)} height={String(window.screen.height / 2)}>
                    <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, LineSeries, Category]} />
                    <SeriesCollectionDirective>
                        <SeriesDirective dataSource={publication21Data[0]} xName={"Publication"} yName={"value"} type='Column' name='CY 2020' marker={{dataLabel:{visible:true}}} animation={{ enable: true, duration: 1200, delay: 100 }} />
                        <SeriesDirective dataSource={publication21Data[1]} xName={"Publication"} yName={"value"} type='Column' name='CY 2021' marker={{dataLabel:{visible:true}}} animation={{ enable: true, duration: 1200, delay: 100 }} />
                    </SeriesCollectionDirective>
                </ChartComponent>
                </HStack>
            </Box>

            <Text width={String(window.screen.width)} alignSelf="start" fontSize={48} fontWeight={"bold"}>Citations</Text>
            <Box borderRadius="lg" shadow="xl" padding="1%">
                <HStack shouldWrapChildren spacing={String(window.screen.width / 50)} maxWidth={String(window.screen.width)*0.9} overflowX="scroll" >
                    // 2020-2021 citations for journal and conference publication
                    <ChartComponent palettes={['#035ff0',"purple"]} border={ { width: 2, color: '#000000' }} title="Journal citations" subTitle="Citations 2020-2021" chartArea={ { background: 'skyblue', width: '90%' }} primaryXAxis={ { valueType: 'Category' }} width={String(window.screen.width / 3)} height={String(window.screen.height / 2)}>
                        <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, LineSeries, Category]} />
                        <SeriesCollectionDirective>
                            <SeriesDirective dataSource={citation21Data[0][0]} xName={"Publication"} yName={"value"} type='Column' name='CY 2020' marker={{dataLabel:{visible:true}}} animation={{ enable: true, duration: 1200, delay: 100 }} />
                            <SeriesDirective dataSource={citation21Data[1][0]} xName={"Publication"} yName={"value"} type='Column' name='CY 2021' marker={{dataLabel:{visible:true}}} animation={{ enable: true, duration: 1200, delay: 100 }} />
                        </SeriesCollectionDirective>
                    </ChartComponent>

                    <ChartComponent palettes={['#035ff0',"purple"]} border={ { width: 2, color: '#000000' }} title="Conference paper citations" subTitle="Citations 2020-2021" chartArea={ { background: 'skyblue', width: '90%' }} primaryXAxis={ { valueType: 'Category' }} width={String(window.screen.width / 3)} height={String(window.screen.height / 2)}>
                        <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, LineSeries, Category]} />
                        <SeriesCollectionDirective>
                            <SeriesDirective dataSource={citation21Data[0][2]} xName={"Publication"} yName={"value"} type='Column' name='CY 2020' marker={{dataLabel:{visible:true}}} animation={{ enable: true, duration: 1200, delay: 100 }} />
                            <SeriesDirective dataSource={citation21Data[1][2]} xName={"Publication"} yName={"value"} type='Column' name='CY 2021' marker={{dataLabel:{visible:true}}} animation={{ enable: true, duration: 1200, delay: 100 }} />
                        </SeriesCollectionDirective>
                    </ChartComponent>

                    <ChartComponent palettes={['#035ff0',"purple"]} border={ { width: 2, color: '#000000' }} title="Books / Chapter citations" subTitle="Citations 2020-2021" chartArea={ { background: 'skyblue', width: '90%' }} primaryXAxis={ { valueType: 'Category' }} width={String(window.screen.width / 3)} height={String(window.screen.height / 2)}>
                        <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, LineSeries, Category]} />
                        <SeriesCollectionDirective>
                            <SeriesDirective dataSource={citation21Data[0][1]} xName={"Publication"} yName={"value"} type='Column' name='CY 2020' marker={{dataLabel:{visible:true}}} animation={{ enable: true, duration: 1200, delay: 100 }} />
                            <SeriesDirective dataSource={citation21Data[1][1]} xName={"Publication"} yName={"value"} type='Column' name='CY 2021' marker={{dataLabel:{visible:true}}} animation={{ enable: true, duration: 1200, delay: 100 }} />
                        </SeriesCollectionDirective>
                    </ChartComponent>
                </HStack>
            </Box>
        </VStack>
    );
};

function GrantRevenueTab() {
    return (
        <VStack spacing={String(window.screen.height / 50)} >
            <Text width="100%" fontSize={48}s fontWeight={"bold"}>Grants & Revenue Generation</Text>
            <Box borderRadius="lg" shadow="xl" padding="1%">
            <HStack shouldWrapChildren spacing={String(window.screen.width / 50)} maxWidth={String(window.screen.width)*0.9} >
                <ChartComponent palettes={['#035ff0',"purple"]} border={ { width: 2, color: '#000000' }} title="Grants & other revenue generations" subTitle="Grants applied since 2017" chartArea={ { background: 'skyblue', width: '90%' }} primaryXAxis={ { valueType: 'Category' }} width={String(window.screen.width / 2)} height={String(window.screen.height / 2)}>
                    <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, LineSeries, Category]} />
                    <SeriesCollectionDirective>
                        <SeriesDirective dataSource={grantData} xName={"GrantType"} yName={"value"} type='Column' name='Grants & other revenue generations' marker={{dataLabel:{visible:true}}} animation={{ enable: true, duration: 1200, delay: 100 }} />
                    </SeriesCollectionDirective>
                </ChartComponent>
            </HStack>
            </Box>
        </VStack>
    );
}
function ResearchProjectTab() {
    return (
        <VStack spacing={String(window.screen.height / 50)} >
            <Text width="100%" fontSize={48} fontWeight={"bold"}>Research Projects Sanctioned Grants</Text>
            <Box borderRadius="lg" shadow="xl" padding="1%">
                <HStack shouldWrapChildren spacing={String(window.screen.width / 50)} maxWidth={String(window.screen.width)*0.9} overflowX="scroll" >
                    <AccumulationChartComponent enableSmartLabels="true" textRender={thistextRender} >
                        <Inject services={[AccumulationDataLabel,PieSeries]}/>
                        <AccumulationSeriesCollectionDirective>
                            <AccumulationSeriesDirective dataSource={ResearchProjectData} xName='Name' yName='Amount' type='Pie' dataLabel={{visible:true, color:"black" ,position: 'Outside', name: 'text'}} animation={{ enable: true, duration: 1200, delay: 100 }} >
                            </AccumulationSeriesDirective>
                        </AccumulationSeriesCollectionDirective>
                    </AccumulationChartComponent>;
                </HStack>
            </Box>
            <Text width="100%" fontSize={48}s fontWeight={"bold"}>Research Project Applied Grants</Text>
            <Box borderRadius="lg" shadow="xl" padding="1%">
                <Image src={String(process.env.PUBLIC_URL + "/researchgrantstable.png")} />
            </Box>
        </VStack>
    );
}

function PatentsTab() {
    return (
        <VStack spacing={String(window.screen.height / 50)} >
            <Text width="100%" fontSize={48} fontWeight={"bold"}>Patents</Text>
            <Box borderRadius="lg" shadow="xl" padding="1%">
                <HStack shouldWrapChildren spacing={String(window.screen.width / 50)} maxWidth={String(window.screen.width)*0.9} overflowX="scroll" >
                    <ChartComponent palettes={['#035ff0',"purple"]} border={ { width: 2, color: '#000000' }} title="Total patents 2017-2021" subTitle="Patents since 2017" chartArea={ { background: 'skyblue', width: '90%' }} primaryXAxis={ { valueType: 'Category' }} width={String(window.screen.width / 2)} height={String(window.screen.height / 2)}>
                        <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, LineSeries, Category]} />
                        <SeriesCollectionDirective>
                            <SeriesDirective dataSource={patentData} xName={"Year"} yName={"Patents"} type='Column' name='Patents' marker={{dataLabel:{visible:true}}} animation={{ enable: true, duration: 1200, delay: 100 }} />
                        </SeriesCollectionDirective>
                    </ChartComponent>
                </HStack>
            </Box>
        </VStack>
    );
}
export {GrantRevenueTab, PublicationTab, ResearchProjectTab, PatentsTab}


function thistextRender (args) {
    console.log(args)
    args.font.color = 'black';
    args.text = String(args.point.x) + ":" + String(args.point.y);
}

const journalPubData = [{
    Year:2017,
    Publications:63
  },
  {
    Year:2018,
    Publications:50
  },
  {
    Year:2019,
    Publications:58
  },
  {
    Year:2020,
    Publications:68
  },
  {
    Year:2021,
    Publications:78
  }
];

const conferencePubData = [{
    Year:2017,
    Publications:154
  },
  {
    Year:2018,
    Publications:141
  },
  {
    Year:2019,
    Publications:117
  },
  {
    Year:2020,
    Publications:84
  },
  {
    Year:2021,
    Publications:102
  }
];

const publication21Data = [
  [
      {
          "Publication":"Google Scholar",
          "value":57
      },
      {
          "Publication":"Scopus",
          "value":47
      },
      {
          "Publication":"SCI / SCIE / ESCI / WoS",
          "value":48
      },
      {
          "Publication":"Total",
          "value":152
      }
  ],
  [
      {
          "Publication":"Google Scholar",
          "value":40
      },
      {
          "Publication":"Scopus",
          "value":92
      },
      {
          "Publication":"SCI / SCIE / ESCI / WoS",
          "value":23
      },
      {
          "Publication":"Total",
          "value":155
      }
  ]
];

const citation21Data = [
    [
        [
            {
                "Publication":"WoS",
                "value":88
            },
            {
                "Publication":"Scopus",
                "value":104
            },
            {
                "Publication":"Google Scholar",
                "value":508
            },
        ],
        [
            {
                "Publication":"WoS",
                "value":2
            },
            {
                "Publication":"Scopus",
                "value":3
            },
            {
                "Publication":"Google Scholar",
                "value":53
            },
        ],
        [
            {
                "Publication":"WoS",
                "value":53
            },
            {
                "Publication":"Scopus",
                "value":181
            },
            {
                "Publication":"Google Scholar",
                "value":399
            },
        ]
    ],
    [
        [
            {
                "Publication":"WoS",
                "value":77
            },
            {
                "Publication":"Scopus",
                "value":111
            },
            {
                "Publication":"Google Scholar",
                "value":647
            },
        ],
        [
            {
                "Publication":"WoS",
                "value":18
            },
            {
                "Publication":"Scopus",
                "value":6
            },
            {
                "Publication":"Google Scholar",
                "value":55
            },
        ],
        [
            {
                "Publication":"WoS",
                "value":37
            },
            {
                "Publication":"Scopus",
                "value":174
            },
            {
                "Publication":"Google Scholar",
                "value":470
            },
        ]
    ]
]

const grantData = [
    {
        "GrantType":"Government Grant",
        "value":1266800
    },
    {
        "GrantType":"Revenue Generation",
        "value":6768755
    }
]

const patentData = [
    {
        "Year":"2017",
        "Patents":"3"
    },
    {
        "Year":"2018",
        "Patents":"6"
    },
    {
        "Year":"2019",
        "Patents":"10"
    },
    {
        "Year":"2020",
        "Patents":"8"
    },
    {
        "Year":"2021",
        "Patents":"26"
    },
]

const ResearchProjectData = [
    {
      "Name": "BCUD",
      "Amount": 167000,
    },
    {
      "Name": "IBM",
      "Amount": 1000000,
    },
    {
      "Name": "Innovation Grant",
      "Amount": 538840,
    },
    {
      "Name": "MITWPU SEED",
      "Amount": 140000,
    }
  ]
