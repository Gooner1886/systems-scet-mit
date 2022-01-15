import { Category, ChartComponent, ColumnSeries, DataLabel, Inject, Legend, LineSeries, SeriesCollectionDirective, SeriesDirective, Tooltip } from '@syncfusion/ej2-react-charts';
import React from "react";
import {Box, VStack, HStack, Text } from "@chakra-ui/react";


function PublicationTab() {
    return (
        <VStack spacing={String(window.screen.height / 50)} >
            <Text width="100%" fontSize={48} fontWeight={"bold"}>Publications</Text>
            <Box padding="1%">
                <HStack spacing={String(window.screen.width / 50)} scrollBehavior="smooth" scrollSnapType={"x"} >
                
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

            <Text width="100%" fontSize={48}s fontWeight={"bold"}>Citations</Text>
            <Box padding="1%">
                <HStack spacing={String(window.screen.width / 50)} scrollBehavior="smooth" scrollSnapType={"x"} >

                    // 2020-2021 citations for journal and conference publication
                    <ChartComponent palettes={['#035ff0',"purple"]} border={ { width: 2, color: '#000000' }} title="Journal citations" subTitle="Citations 2020-2021" chartArea={ { background: 'skyblue', width: '90%' }} primaryXAxis={ { valueType: 'Category' }} width={String(window.screen.width / 3.5)} height={String(window.screen.height / 2)}>
                        <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, LineSeries, Category]} />
                        <SeriesCollectionDirective>
                            <SeriesDirective dataSource={citation21Data[0][0]} xName={"Publication"} yName={"value"} type='Column' name='CY 2020' marker={{dataLabel:{visible:true}}} animation={{ enable: true, duration: 1200, delay: 100 }} />
                            <SeriesDirective dataSource={citation21Data[1][0]} xName={"Publication"} yName={"value"} type='Column' name='CY 2021' marker={{dataLabel:{visible:true}}} animation={{ enable: true, duration: 1200, delay: 100 }} />
                        </SeriesCollectionDirective>
                    </ChartComponent>

                    <ChartComponent palettes={['#035ff0',"purple"]} border={ { width: 2, color: '#000000' }} title="Conference paper citations" subTitle="Citations 2020-2021" chartArea={ { background: 'skyblue', width: '90%' }} primaryXAxis={ { valueType: 'Category' }} width={String(window.screen.width / 3.5)} height={String(window.screen.height / 2)}>
                        <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, LineSeries, Category]} />
                        <SeriesCollectionDirective>
                            <SeriesDirective dataSource={citation21Data[0][2]} xName={"Publication"} yName={"value"} type='Column' name='CY 2020' marker={{dataLabel:{visible:true}}} animation={{ enable: true, duration: 1200, delay: 100 }} />
                            <SeriesDirective dataSource={citation21Data[1][2]} xName={"Publication"} yName={"value"} type='Column' name='CY 2021' marker={{dataLabel:{visible:true}}} animation={{ enable: true, duration: 1200, delay: 100 }} />
                        </SeriesCollectionDirective>
                    </ChartComponent>

                    <ChartComponent palettes={['#035ff0',"purple"]} border={ { width: 2, color: '#000000' }} title="Books / Chapter citations" subTitle="Citations 2020-2021" chartArea={ { background: 'skyblue', width: '90%' }} primaryXAxis={ { valueType: 'Category' }} width={String(window.screen.width / 3.5)} height={String(window.screen.height / 2)}>
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
            <Box padding="1%">
            <HStack spacing={String(window.screen.width / 50)}>
                <ChartComponent palettes={['#035ff0',"purple"]} border={ { width: 2, color: '#000000' }} title="Grants & other revenue generations" subTitle="Grants applied since 2017" chartArea={ { background: 'skyblue', width: '90%' }} primaryXAxis={ { valueType: 'Category' }} width={String(window.screen.width / 2)} height={String(window.screen.height / 2)}>
                    <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, LineSeries, Category]} />
                    <SeriesCollectionDirective>
                        <SeriesDirective dataSource={grantData} xName={"GrantType"} yName={"value"} type='Column' name='Grants & other revenue generations' marker={{dataLabel:{visible:true}}} animation={{ enable: true, duration: 1200, delay: 100 }} />
                    </SeriesCollectionDirective>
                </ChartComponent>
                
                <ChartComponent palettes={['#035ff0',"purple"]} border={ { width: 2, color: '#000000' }} title="Faculty publications" subTitle="Publications since 2017" chartArea={ { background: 'skyblue', width: '90%' }} primaryXAxis={ { valueType: 'Category' }} width={String(window.screen.width / 3)} height={String(window.screen.height / 2)}>
                    <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, LineSeries, Category]} />
                    <SeriesCollectionDirective>
                        <SeriesDirective dataSource={journalPubData} xName={"Year"} yName={"Publications"} type='Column' name='Journal' marker={{dataLabel:{visible:true}}} animation={{ enable: true, duration: 1200, delay: 100 }} />
                        <SeriesDirective dataSource={conferencePubData} xName={"Year"} yName={"Publications"} type='Column' name='Conference' marker={{dataLabel:{visible:true}}} animation={{ enable: true, duration: 1200, delay: 100 }} />
                    </SeriesCollectionDirective>
                </ChartComponent>
            </HStack>
            </Box>
        </VStack>
    );
}

export {GrantRevenueTab, PublicationTab}




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